
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

import business from './business'
import login from './login'
import proManagement from './pro-management'
Vue.use(Vuex)
const state = {}

const action = {}

const modules = {business,login,proManagement}

export default new Vuex.Store({
  state,
  getters,
  action,
  modules
})
