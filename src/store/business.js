
import api from '../api/index'

const state = {}
const mutations = {}
const actions ={
  getApplyleaveList(context, params) {
    return api.business.getApplyleaveList(params)
  }
}
export default {namespaced: true, state, mutations, actions}