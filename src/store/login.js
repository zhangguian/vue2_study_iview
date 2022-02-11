
import api from '../api/index'

const userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : ''
const state = {
  // 判断登录状态
  logged: !!userInfo,
  userInfo,
  loading: false,
  tokenList: []
}
const mutations = {
  SET_LOGGED (state, { tokenList, userInfo }) {
    state.logged = true,
      state.userInfo = userInfo,
      state.tokenList = tokenList
  },
  SET_USERINFO (state, data) {
    state.userInfo = data
  },
  SET_LOGINOUT (state) {
    state.logged = false,
      state.userInfo = null
  },
  LOADING (state, status) {
    state.logged = status
  }
}
const actions = {
  loginAccount (context, params) {
    return api.login.loginAccount(params)
  },
  logintest (context, params) {
    return api.login.logintest(params)
  },
  test (context, params) {
    return api.login.test(params)
  },
  testPost (context, params) {
    return api.login.testPost(params)
  },
}
export default { namespaced: true, state, mutations, actions }