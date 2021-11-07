/*
 * @Author: your name
 * @Date: 2021-07-01 19:48:37
 * @LastEditTime: 2021-11-07 15:23:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueLazyLoad, {
  preLoad: 1
})

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

require('./assets/css/base.css')