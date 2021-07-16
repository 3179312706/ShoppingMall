/*
 * @Author: your name
 * @Date: 2021-07-01 19:48:37
 * @LastEditTime: 2021-07-03 12:30:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

require('./assets/css/base.css')