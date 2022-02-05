import request from '../network/request'

export default {
  proAllList: (params,config) => request('post', '/proManagement/proAllList',params)
}