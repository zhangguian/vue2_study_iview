
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

import business from './business'
import login from './login'
import proManagement from './pro-management'
import task from './task'
Vue.use(Vuex)
const state = {
  isGlobalSpin: false, // 全局Loading
}

const mutations = {
  changeGlobalSpin (state, show) {
    state.isGlobalSpin = show;
  },
}
const action = {}

const modules = {business,login,proManagement,task}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  action,
  modules,
})
