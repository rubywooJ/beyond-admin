import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font/iconfont.css'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { getRefreshToken, isRefreshTokenExpired} from './js/format' //刷新token的接口与过期时间倒计时
window.isReresh = false; //用于判断是否刷新，不能少

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://beyond.tsxygfy.cn/api/admin'
axios.defaults.headers.common['ADMIN-Authorization'] = localStorage.getItem('accessToken');
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf8';

axios.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('Authorization');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    let resetTime= sessionStorage.getItem('resetTime');
    let token = sessionStorage.getItem('Authorization');
    if(token){//有没有token
      isRefreshTokenExpired(resetTime);
      if(resetTime<86400){//时间少于24小时不刷新
        if(!window.isReresh){
          window.isReresh = true;
          let refresh_token = sessionStorage.getItem('refresh_token')
          getRefreshToken(refresh_token).then(res => {
            window.isReresh = false;
            isRefreshTokenExpired(res.data.resetTime);// 重新获取的token有效时间
            store.commit('changeLogin',{//vuex中修改相关信息
              Authorization:res.data.access_token,
              token_type:res.data.token_type,
              refresh_token:res.data.refresh_token,
            });
          }).catch(err => {});
        }
      }else window.isReresh = false;
      }

    return response;  //请求成功的时候返回的data
  },
  error => {
    try {
      if (error.response) {
        endLoading();
        switch (error.response.status) {
          case 401://token过期，清除它,清除token信息并跳转到登录页面
            store.commit('DelToken');
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath//登录之后跳转到对应页面
              }
            });
            return;
          case 403://权限
            store.commit('DelToken');
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath//登录之后跳转到对应页面
              }
            });
            return;
        }
      }
      return Promise.reject(error.response.data)
    }
    catch (e) {
    }
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
