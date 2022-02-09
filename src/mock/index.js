
if(process.env.MODE_ENV !== 'production') {
  const Mock = require('mockjs')
  require('./services/user')
  require('./services/task')
  require('./services/business')
  require('./services/proManagement')
  Mock.setup({ // 指定被拦截的 ajax 请求的响应时间
      timeout: 800
  })
}
import Mock from 'mockjs'
import {builder,getUrlParams, getBody} from './utils'

// 生成新闻列表

let {newList} = Mock.mock({
  "newList|20-50": [
    {
      "id:": "@increment()",
      "title": "@ctitle()",
      "content": "@cparagraph(5,15)",
    }
  ]
})
// 新闻列表接口
Mock.mock(/\/test/, 'get', (options) => {
  const {url} = options
  let {page, pageSize} = getUrlParams(url)
  
  // 实现分页 
  // 截取数据的起始位置
  // 第1页： 0-9
  // 第2页： 10-19
  // 第3页： 20-29
  // 数据起始位置：(page - 1)* pageSize
  // 数据结束位置：page * pageSize
  const start = (page - 1) * pageSize
  // 截取数据的结束位置
  const end = page * pageSize
  // 计算总页数
  const totalPage = Math.ceil(newList.length / pageSize) // Math.ceil 向上取整

  const list = page > totalPage? [] : newList.slice(start, end)

  return {
    status: 200,
    message: 'succ',
    list: list,
    total: newList.length
  }
})

// 添加列表
Mock.mock('/api/addgoods', 'post',  (options) => {
  const body = getBody(options)
  console.log('body', body);
  newList.push(Mock.mock({
    "id:": "@increment()",
    "title": body.title,
    "content": body.content,
  }))
  return {
    status:200,
    message:"添加",
    list:newList,
    total:newList.length
  }
})



Mock.mock('/login/logintest', 'post', (req,res) => {
  // return builder(JSON.parse(req.body))
  let {username, password} = JSON.parse(req.body)
  if(username == 'admin' && password === '1234') {
    const data = {
      userId: 'admin',
      username: 'zhangguian',
      password: '123456',
      avatar: 'https://img2.baidu.com/it/u=1960058469,2576593478&fm=26&fmt=auto',
      token: 'fuyerhfyuerghfvyufdsfsghfyusdghfyugfyuehgurhvvurh'
    }
    return builder(data)
  } else {
    return '失败'
  }
})
