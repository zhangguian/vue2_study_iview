
import api from '../api/index'

const state = {}
const mutations = {}
const actions ={
  loginAccount(context, params) {
    return api.login.loginAccount(params)
  },
  logintest(context, params) {
    return api.login.logintest(params)
  },
  test(context, params) {
    return api.login.test(params)
  },
  testPost(context, params) {
    return api.login.testPost(params)
  },
}
export default {namespaced: true, state, mutations, actions}