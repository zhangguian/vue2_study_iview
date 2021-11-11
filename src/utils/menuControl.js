/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-11-08 21:20:12
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-08 21:20:13
 */
import { forEach, hasOneOf, objEqual } from './tools'

/**
 * @param {Array} item 判断路由是否有子
 * @returns {Array}
 */
export const hasChild = (item) => {
  return item.children && item.children.length !==0
}

const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) return true
    else return false
  } else return true
}

/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list, access) => {
  // console.log('list :>> ', list);
  let res = []
  forEach(list, item => {
    if(!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta
      }
      if((hasChild(item) || (item.meta && item.meta.showAlways)) && showThisMenuEle(item,access)) {
        obj.children = getMenuByRouter(item.children, access)
      }
      if(item.meta && item.meta.href) obj.href = item.meta.href
      if (showThisMenuEle(item, access)) res.push(obj)
    }
  })
  return res
}
/**
 * @param {Array} routeMetched 当前路由metched(记录表)
 * @returns {Array}
 */
export const getBreadCrumblist = (route, homeRoute) => {
  
}

// scrollTop animation
export const scrollTop = (el, from = 0, to, duration = 500, endCallback) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil(difference / duration * 50)

  const scroll = (start, end, step) => {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let d = (start + step > end) ? end : start + step
    if (start > end) {
      d = (start - step < end) ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}