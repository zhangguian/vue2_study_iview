
import api from '../api/index'

const state = {}
const mutations = {}
const actions ={
  loginAccount(context, params) {
    return api.login.loginAccount(params)
  }
}
export default {namespaced: true, state, mutations, actions}