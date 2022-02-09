import Mock from 'mockjs'
import {builder, getBody} from '../utils'

// 登录接口
// Mock.mock(`/logintest`,'post', (req,res) => {
//   let {username, password} = qs.parse(req.body)
//   if(username == 'admin' && password === '1234') {
//     const data = {
//       userId: 'admin',
//       username: 'zhangguian',
//       password: '123456',
//       avatar: 'https://img2.baidu.com/it/u=1960058469,2576593478&fm=26&fmt=auto',
//       token: 'fuyerhfyuerghfvyufdsfsghfyusdghfyugfyuehgurhvvurh'
//     }
//     return builder(data)
//   } else {
//     return '失败'
//   }
// })

// 删除
// Mock.mock('/api/dele', 'post', (options) => {
//   const body = getBody(options)
//   const index = newList.findIndex(item => item.id == body.id)
//   newList.splice(index, 1)
//   return {
//     status:200,
//     message:"删除",
//     list:newList,
//     total:newList.length
//   }
// })


