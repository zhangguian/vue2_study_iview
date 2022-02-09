
import api from '../api/index'

const state = {}
const mutations = {}
const actions ={
  getApplyleaveList(context, params) {
    return api.business.getApplyleaveList(params)
  },
  deleOneApply(context, params) {
    return api.business.deleOneApply(params)
  },
  addApply(context, params) {
    return api.business.addApply(params)
  },
  getEvectionList(context, params) {
    return api.business.getEvectionList(params)
  },
  deleOneEvectionApply(context, params) {
    return api.business.deleOneEvectionApply(params)
  },
  addEvectionApply(context, params) {
      return api.business.addEvectionApply(params)
    },
}
export default {namespaced: true, state, mutations, actions}