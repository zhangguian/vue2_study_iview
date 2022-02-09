import Mock from 'mockjs'
import { getBody, getUrlParams } from "../utils"

let {proList} = Mock.mock({
  "proList|20-30": [
    {
      "id": "@id(5)", 
      "proName": "@cword(5, 8)",
      "creator": "@cname()",
      "proDesc": "@cparagraph(1,3)",
      "time": "@date(yyyy-MM-dd)",
      "avatar": "@image(40x40)",
      "status": '@integer(0, 3)'
    }
  ]
})

let {proDetailsList} = Mock.mock({
  "proDetailsList": [
    
  ]
})


// 获取请假申请列表
const getProList = options => {
  const body = getBody(options)
  const {pageNum, pageSize,flag, name} = body
  const tempList = proList.filter(list => {
    if(flag && list.status != flag || name && list.proName != name) {
      return false
    }
    return true
  })
  const start = (pageNum - 1) * pageSize
  const end = pageNum * pageSize
  const totalPage = Math.ceil(tempList.length / pageSize)
  const list = pageNum > totalPage ? [] : tempList.slice(start, end)
  return {
    status:200,
    message:"查询成功",
    records:list,
    total:tempList.length
  }
}

// 删除单个申请列表
const deleOnePro = options => {
  const {id} = getBody(options)
  console.log('body', id);
  const index = proList.findIndex(item => item.id == id)
  proList.splice(index, 1)
  return {
    status:200,
    message:"删除成功",
    records:proList,
    total:proList.length
  }
}

// 增加申请单
const addApply = options=> {
  const body = getBody(options)
  const {id,
    applicant,
    applyType,
    reason,
    department,
    position,
    phone,
    principal,
    applyDate,
    startDate,
    endDate} = body
    applyLeavetList.push(Mock.mock({
      "id": "@id(5)", 
      "applicant": applicant,
      "applyType": applyType,
      "reason": reason,
      "department": department,
      "position": position,
      "phone": phone,
      "principal": principal,
      "applyDate": new Date().getTime(),
      "startDate": startDate,
      "endDate": endDate,
      "applyStatus": '0'
    }))
    return {
      status:200,
      message:"添加成功",
      records:applyLeavetList,
      total:applyLeavetList.length
  }
}






Mock.mock(/\/pro\/getproList/, 'post', getProList)
Mock.mock(/\/pro\/deleOnePro/, 'post', deleOnePro)
Mock.mock(/\/business\/addApply/, 'post', addApply)