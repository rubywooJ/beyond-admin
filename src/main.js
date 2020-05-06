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

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
