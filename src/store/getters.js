
import { getMenuByRouter } from '../utils/menuControl'
import routers from '@/router/routers'
export const menuList = function (rootState) {
  return getMenuByRouter(routers, rootState.access)
}

