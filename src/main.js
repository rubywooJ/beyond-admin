// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import ElementUI from 'element-ui'
import axios from 'axios'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css'
import {version} from '../package.json'

Vue.prototype.VERSION = version;
Vue.prototype.axios = axios;
Vue.use(VueRouter);
Vue.use(ElementUI);
window.isReresh = false; //用于判断是否刷新，不能少

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if(localStorage.getItem('accessToken')){ //判断本地是否存在accessToken
        next();
      }else {
       if(to.path === '/Login'){
          next();
        }else {
          next({
            path:'/Login'
          })
        }
      }
    }
    else {
      next();
    }
    /*如果本地 存在 token 则不允许直接跳转到 登录页面*/
    if(to.fullPath == "/Login"){
      if(localStorage.getItem('accessToken')){
        next({
          path:from.fullPath
        });
      }else {
        next();
      }
    }
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
