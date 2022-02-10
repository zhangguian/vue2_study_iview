const userList = require('../data/user-data.json') 
import Mock from 'mockjs'
import {builder,getUrlParams, getBody} from '../utils'


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
    return builder(userList)
  } else {
    return '失败'
  }
})
