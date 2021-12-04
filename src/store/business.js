/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-01 23:09:51
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-02 15:45:51
 */
import api from '../api/index'

const state = {}
const mutations = {}
const actions ={
  getApplyleaveList(context, params) {
    return api.business.getApplyleaveList(params)
  }
}
export default {namespaced: true, state, mutations, actions}