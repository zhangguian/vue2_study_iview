
import api from '../api/index'

const state = {
}
const mutations = {}
const actions ={
  getPendingTask(context, params) {
    return api.task.getPendingTask(params)
  },
  deleOnePendingTask(context, params) {
    return api.task.deleOnePendingTask(params)
  },
  getDoneTask(context, params) {
    return api.task.getDoneTask(params)
  },
  deleOneDoneTask(context, params) {
    return api.task.deleOneDoneTask(params)
  },
}
export default {namespaced: true, state, mutations, actions}