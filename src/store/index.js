/*
 * @Author: your name
 * @Date: 2021-07-01 19:48:38
 * @LastEditTime: 2021-09-06 14:45:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mall\ShoppingMall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
