import request from "./request"

export default {
  getPendingTask: (params, config) => request('get', '/task/pending', params),
  deleOnePendingTask: (params, config) => request('post', '/task/delepending', params),
  
  getDoneTask: (params, config) => request('get', '/task/doneTask', params),
  deleOneDoneTask: (params, config) => request('post', '/task/deleDoneOne', params),
}