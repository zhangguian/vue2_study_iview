/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-10-23 15:22:42
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-10-23 16:27:55
 */
import * as util from './tools.js';

const tools = {...util}

export default {
  install (Vue) {
    Vue.prototype.$tools = tools
  }
}