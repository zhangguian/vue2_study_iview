/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 16:22:57
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-02 16:11:47
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

import business from './business'
Vue.use(Vuex)
const state = {}

const action = {}

const modules = {business}

export default new Vuex.Store({
  state,
  getters,
  action,
  modules
})
