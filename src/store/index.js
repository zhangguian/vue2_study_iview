/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 16:22:57
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-16 11:58:12
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

import business from './business'
import login from './login'
Vue.use(Vuex)
const state = {}

const action = {}

const modules = {business,login}

export default new Vuex.Store({
  state,
  getters,
  action,
  modules
})
