
import request from './request'
export default {
  // 账号密码登录
  loginAccount: (params, config) => request('post', '/login/loginAccount', params),
  logintest: (params, config) => request('post', '/login/logintest', params),
  test: (params, config) => request('get', '/test', params),
  testPost: (params, config) => request('post', '/test/post', params),
}