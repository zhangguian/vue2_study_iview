
import Vue from 'vue'
import axios from 'axios'
import store from '../store'
import { Message } from 'view-design'
// 创建 axios 实例
const BASE_URL =  process.env.VUE_APP_BASE_URL
const request = axios.create({
  baseURL: BASE_URL,
  timeout: 9000, // 请求超时时间
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  //  请求数据转换
  transformRequest: [(params) => {
    return JSON.stringify(params)
  }],
  //相应数据转换
  transformResponse: [(data) => {
    if (typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data)
    }
    return data
  }]

})

// 异常拦截
const err = (error) => {
  if (error.response) {
    let data = error.response.data
    switch (error.response.status) {
      case 403:
        Vue.prototype.$Notice.error({ message: '系统提示', description: '拒绝访问', duration: 4 })
        break;
      case 401:
        // Vue.prototype.$Message.error({message: 'token'})
        break;
      case 504:
        Vue.prototype.$Message.error({ content: '网络超时' })
        break
      default:
        Vue.prototype.$Message.error({
          content: data.message,
          duration: 4
        })
        break
    }
  } else if (error.message) {
    if (error.message.includes('timeout')) {
      Vue.prototype.$Message.error({ content: '网络超时' })
    } else {
      Vue.prototype.$Message.error({ content: error.message })
    }
  }
  return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use(config => {
  
  const token = window.sessionStorage.getItem('token')
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['Access-Token'] = token
  }
  return config
}, err)

// 响应拦截器
request.interceptors.response.use(response => {
  return response.data
}, err)

export default function (method, url, params, config = {}) {
  return request({
    method, url,
    params: method === "get" || method === 'DELETE' ? params : null,
    data: method === 'post' || method === "PUT" ? params : null

  })
    .then(res => {
      return { data: res || {} }
    })
    .catch(error => {
      if (error.status === 404) {
        Message.error({ content: '服务接口未找到！', duration: 3 })
      } else {
        Message.error({
          content: error,
        })
      }
    })

}
