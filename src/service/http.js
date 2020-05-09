import axios from "axios";
import {getRefreshToken, isRefreshTokenExpired} from "../util/format";
import router from "../router";
import { Message } from 'element-ui';

axios.defaults.headers.common['ADMIN-Authorization'] = localStorage.getItem('accessToken');
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf8';
//封装axios
const service = axios.create({
    baseURL: `https://beyond.tsxygfy.cn/api/admin`,
    timeout: 5000,
    withCredentials: true
});

//请求拦截器
service.interceptors.request.use(
    config => {
        let token = sessionStorage.getItem('Authorization');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// http response 拦截器
service.interceptors.response.use(
    response => {
        let resetTime = sessionStorage.getItem('resetTime');
        let token = sessionStorage.getItem('ADMIN-Authorization');
        if (token) {//有没有token
            isRefreshTokenExpired(resetTime);
            if (resetTime < 86400) {//时间少于24小时不刷新
                if (!window.isReresh) {
                    window.isReresh = true;
                    let refresh_token = sessionStorage.getItem('refreshToken')
                    getRefreshToken()
                        adminApi.refreshToken(refresh_token).then(res => {
                            window.isReresh = false;
                            isRefreshTokenExpired(res.data.resetTime);// 重新获取的token有效时间
                            store.commit('changeLogin', {//vuex中修改相关信息
                                'ADMIN-Authorization': res.data.data.access_token,
                                token_type: res.data.data.token_type,
                                refresh_token: res.data.data.refresh_token,
                        });
                    }).catch(err => {
                    });
                }
            } else window.isReresh = false;
        }

        return response;  //请求成功的时候返回的data
    },
    error => {
        if (axios.isCancel(error)) {
            return Promise.reject(error)
        }
        const response = error.response;
        const status = response ? response.status : -1;
        const data = response ? response.data : null;
        if (data) {
            let handled = false;
            if (data.status) {
                handled = true;

                Message({
                    showClose: true,
                    message: data.message,
                    type: 'error'
                });
            } else if (data.status === 401) {
                store.commit('DelToken');
                router.replace({
                    path: '/Login',
                    query: {
                        redirect: router.currentRoute.fullPath//登录之后跳转到对应页面
                    }
                });
            } else if (data.status === 403) {
                store.commit('DelToken');
                router.replace({
                    path: '/Login',
                    query: {
                        redirect: router.currentRoute.fullPath//登录之后跳转到对应页面
                    }
                });
            } else if (data.status === 404) {
                // TODO handle 404 status error
            } else if (data.status === 500) {
                // TODO handle 500 status error
            }

            if (!handled) {
                Message({
                    showClose: true,
                    message: data.message,
                    type: 'error'
                });
            }
        } else {
            Message({
                showClose: true,
                message: '服务异常',
                type: 'error'
            });
        }
        return Promise.reject(error)
    }
);

export default service
