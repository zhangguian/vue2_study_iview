import Mock from "mockjs"
import { getBody, getUrlParams } from "../utils"

let {pendingTask} = Mock.mock({
  "pendingTask|20-70": [
    {
      "id": "@id(5)",
      "taskname": "@ctitle(8)",
      "taskDesc": '@csentence()',
      "initiator": '@cname',
      "handler": 'zhangguian ' + '、' + '@cname',
      "start": '@date(yyyy-MM-dd hh:mm:ss)',
      "end": '@date(yyyy-MM-dd hh:mm:ss)',
      "status": '@integer( 0, 1 )'
    }
  ]
})

// 已办列表
let {doneTask} = Mock.mock({
  "doneTask|20-70": [
    {
      "id": "@id(5)",
      "taskname": "@ctitle(8)",
      "taskDesc": '@csentence()',
      "initiator": '@cname',
      "handler": 'zhangguian ' + '、' + '@cname',
      "start": '@date(yyyy-MM-dd hh:mm:ss)',
      "end": '@date(yyyy-MM-dd hh:mm:ss)',
    }
  ]
})

// 获取待办任务列表
const getPendingTask = options => {
  const {url} = options
  console.log('url', url);
  const {pageNum, pageSize, taskId, taskname,initiator} = getUrlParams(url)
  const taskList = pendingTask.filter(task => {
    if(taskId && task.taskId != taskId ||
      taskname && task.taskname != taskname ||
      initiator && task.initiator != initiator) {
      return false
    }
    return true
  })
  const start = (pageNum - 1) * pageSize
  const end = pageNum * pageSize
  const totalPage = Math.ceil(taskList.length / pageSize)
  const list = pageNum > totalPage ? [] : taskList.slice(start, end)
  return {
    status:200,
    message:"查询成功",
    records:list,
    total:taskList.length
  }
}

// 删除单个待办列表
const deleOnetask = options => {
  const {id} = getBody(options)
  const index = pendingTask.findIndex(item => item.id == id)
  pendingTask.splice(index, 1)
  return {
      status:200,
      message:"删除成功",
      records:pendingTask,
      total:pendingTask.length
  }
}

const getDoneTask = options => {
  const {url} = options
  console.log('url', url);
  const {pageNum, pageSize, taskId, taskname,initiator} = getUrlParams(url)
  const taskList = doneTask.filter(task => {
    if(taskId && task.taskId != taskId ||
      taskname && task.taskname != taskname ||
      initiator && task.initiator != initiator) {
      return false
    }
    return true
  })
  const start = (pageNum - 1) * pageSize
  const end = pageNum * pageSize
  const totalPage = Math.ceil(taskList.length / pageSize)
  const list = pageNum > totalPage ? [] : taskList.slice(start, end)
  return {
    status:200,
    message:"查询成功",
    records:list,
    total:taskList.length
  }
}

// 删除单个已办列表
const deleOneDonetask = options => {
  const {id} = getBody(options)
  const index = doneTask.findIndex(item => item.id == id)
  doneTask.splice(index, 1)
  return {
      status:200,
      message:"删除成功",
      records:doneTask,
      total:doneTask.length
  }
}

Mock.mock(/\/task\/pending/, 'get', getPendingTask)
Mock.mock(/\/task\/delepending/, 'post', deleOnetask)

Mock.mock(/\/task\/doneTask/, 'get', getDoneTask)
Mock.mock(/\/task\/deleDoneOne/, 'post', deleOneDonetask)