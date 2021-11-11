/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-10-23 15:22:42
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-10-31 19:04:52
 */
import * as util from './tools.js';
import consts from './consts'

const tools = {...util}

export default {
  install (Vue) {
    Vue.prototype.$tools = tools
    Vue.prototype.$c = consts
  }
}