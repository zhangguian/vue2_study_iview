/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-23 16:39:29
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-23 17:08:01
 */
import api from '../api/index'

const state = {}
const mutations = {}
const actions ={
  proAllList(context, params) {
    return api.proManagement.proAllList(params)
  }
}
export default {namespaced: true, state, mutations, actions}