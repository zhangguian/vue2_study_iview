import request from './request'

export default {
  proAllList: (params,config) => request('post', '/pro/getproList',params),
  delePro: (params,config) => request('post', '/pro/deleOnePro',params),
}