import service from '../service/http'

// const baseUrl = '/api/admin';

const adminApi = {};

//获取博客运行信息
adminApi.blogInfo = () => {
    return service({
        // url: `${baseUrl}/info`,
        url: `/info`,
        method: `get`,
        mute: true
    })
};

//获取用户信息
adminApi.userInfo = () => {
    return service({
        // url: `${baseUrl}/info`,
        url: `/user/info`,
        method: `get`,
        mute: true
    })
};

//登录
adminApi.login = (username, password) => {
    return service({
        url: `/login`,
        data: {
            username: username,
            password: password
        },
        method: 'post'
    })
};

//登出
adminApi.logout = () => {
    return service({
        url: `/logout`,
        method: 'post'
    })
};

//刷新token
adminApi.refreshToken = refreshToken => {
    return service({
        url: `/refresh/${refreshToken}`,
        method: 'post'
    })
};

//重启
adminApi.restartApp = () => {
    return service({
        url: `/beyond-restart`,
        method: 'post'
    })
};

//关闭
adminApi.shutdownApp = () => {
    return service({
        url: `/beyond-shutdown`,
        method: 'post'
    })
};

//修改密码
adminApi.resetPassword = (data) => {
    return service({
        url: `/user/restPassword`,
        method: 'post',
        data: data
    })
};

export default adminApi
