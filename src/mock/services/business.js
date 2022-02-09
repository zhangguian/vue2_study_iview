import Mock from 'mockjs'
import { getBody, getUrlParams } from "../utils"

let {applyLeavetList} = Mock.mock({
  "applyLeavetList|20-70": [
    {
      "id": "@id(5)", 
      "applicant": "@cname", 
      "applyType": '@integer( 0, 1 )',
      "reason": '@cparagraph(1,3)',
      "department": '@csentence(1, 3)',
      "position":  '@csentence(1, 3)',
      "phone": '@id(5)',
      "principal": '@cname',
      "applyDate": '@date(yyyy-MM-dd hh:mm:ss)',
      "startDate": '@date(yyyy-MM-dd hh:mm:ss)',
      "endDate": '@date(yyyy-MM-dd hh:mm:ss)',
      "applyStatus": '@integer( 0, 1 )'
    }
  ]
})
let {applyEvectionList} = Mock.mock({
  "applyEvectionList|20-40": [
    {
      "id": "@id(5)", 
      "applicant": "@cname", 
      "origin": '@county(true)',
      "address": '@county(true)',
      "department": '@csentence(1, 3)',
      "reason": '@cparagraph(1,3)',
      "pay": '0',
      "position":  '@csentence(1, 3)',
      "amount": '@integer( 100, 5000 )',
      "route": '@county(true) - @county(true) -  @county(true)',
      "startDate": '@date(yyyy-MM-dd hh:mm:ss)',
      "TravelTool": '火车',
      "desc": '@cparagraph(1,3)',
      "day": '@integer( 2, 100 )',
      "endDate": '@date(yyyy-MM-dd hh:mm:ss)',
      "applyStatus": '@integer( 0, 1 )'
    }
  ]
})

// 获取请假申请列表
const getApplyLeavetList = options => {
  const body = getBody(options)
  const {pageNum, pageSize, applicant, applyStatus, applyType,applyDate} = body
  const applyList = applyLeavetList.filter(apply => {
    if(applicant && apply.applicant != applicant ||
      applyType && apply.applyType != applyType ||
      applyStatus && apply.applyStatus != applyStatus ||
      applyDate && apply.applyDate != applyDate) {
      return false
    }
    return true
  })
  const start = (pageNum - 1) * pageSize
  const end = pageNum * pageSize
  const totalPage = Math.ceil(applyList.length / pageSize)
  const list = pageNum > totalPage ? [] : applyList.slice(start, end)
  return {
    status:200,
    message:"查询成功",
    records:list,
    total:applyList.length
  }
}

// 删除单个申请列表
const deleOneApply = options => {
  const body = getBody(options)
  const index = applyLeavetList.findIndex(item => item.id == body.id)
  applyLeavetList.splice(index, 1)
  return {
    status:200,
    message:"删除成功",
    records:applyLeavetList,
    total:applyLeavetList.length
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


// // 获取出差申请列表
const getApplyEvectionList = options => {
  const body = getBody(options)
  const {pageNum, pageSize, applicant,} = body
  const applyList = applyEvectionList.filter(apply => {
    if(applicant && apply.applicant != applicant ) {
      return false
    }
    return true
  })
  const start = (pageNum - 1) * pageSize
  const end = pageNum * pageSize
  const totalPage = Math.ceil(applyList.length / pageSize)
  const list = pageNum > totalPage ? [] : applyList.slice(start, end)
  return {
    status:200,
    message:"查询成功",
    records:list,
    total:applyList.length
  }
}

const deleOneApplyEvection = options => {
  const body = getBody(options)
  const index = applyEvectionList.findIndex(item => item.id == body.id)
  applyEvectionList.splice(index, 1)
  return {
      status:200,
      message:"删除成功",
      records:applyEvectionList,
      total:applyEvectionList.length
  }
}

// 增加申请单
const addApplyEvection = options=> {
  const body = getBody(options)
  const {id,
    applicant,
    department,
    position,
    origin,
    address,
    startDate,
    endDate,
    pay,
    amount,
    route,
    desc,
    } = body
    applyEvectionList.unshift(Mock.mock({
      "id": "@id(5)", 
      "applicant": applicant,
      "origin": origin,
      "address": address,
      "department": department,
      "pay": pay,
      "position": position,
      "amount": amount,
      "route": route,
      "desc": desc,
      "startDate": startDate,
      "endDate": endDate,
      "applyStatus": '0'
    }))
    return {
      status:200,
      message:"添加成功",
      records:applyEvectionList,
      total:applyEvectionList.length
  }
}



// 获取报销单




Mock.mock(/\/business\/applyLeaveList/, 'post', getApplyLeavetList)
Mock.mock(/\/business\/deleOneApply/, 'post', deleOneApply)
Mock.mock(/\/business\/addApply/, 'post', addApply)

Mock.mock(/\/business\/applyEvectionList/, 'post', getApplyEvectionList)
Mock.mock(/\/business\/deleOneEvectionApply/, 'post', deleOneApplyEvection)
Mock.mock(/\/business\/addEvectionApply/, 'post', addApplyEvection)