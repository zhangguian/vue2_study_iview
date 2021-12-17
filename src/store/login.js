/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-16 11:40:06
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-16 11:41:26
 */
import api from '../api/index'

const state = {}
const mutations = {}
const actions ={
  loginAccount(context, params) {
    return api.login.loginAccount(params)
  }
}
export default {namespaced: true, state, mutations, actions}