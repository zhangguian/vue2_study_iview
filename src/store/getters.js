/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-08 09:18:24
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-08 21:21:08
 */
import { getMenuByRouter } from '../utils/menuControl'
import routers from '@/router/routers'
export const menuList = function (rootState) {
  // const res = getMenuByRouter(routers, rootState.access)
  return getMenuByRouter(routers, rootState.access)
}