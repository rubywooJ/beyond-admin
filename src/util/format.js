export function getRefreshToken(param) { // 刷新token 注意这里用到的service
    let params = {
        refreshToken: param
    }
    return axios.post(baseUrl + '/account-center/refresh/token', params)
        .then((res) => {
            return Promise.resolve(res.data)
        })
}

export function isRefreshTokenExpired(timestamp) {
    clearInterval(window.interval);
    window.interval = setInterval(() => {
        timestamp = timestamp - 1
        sessionStorage.setItem('resetTime', timestamp)
    }, 1000)
}
