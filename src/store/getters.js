import { getMenuByRouter } from '../libs/utils'
import routers from '@/router/routers'
export const menuList = function (rootState) {
  // const res = getMenuByRouter(routers, rootState.access)
  return getMenuByRouter(routers, rootState.access)
}