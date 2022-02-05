
import request from '../network/request'
export default {
  // 账号密码登录
  loginAccount: (params, config) => request('post', '/login/loginAccount', params)
}