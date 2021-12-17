/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-12-14 21:57:23
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-16 11:44:52
 */
import request from '../network/request'
export default {
  // 账号密码登录
  loginAccount: (params, config) => request('post', '/login/loginAccount', params)
}