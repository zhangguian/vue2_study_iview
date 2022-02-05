
import * as util from './tools.js';
import consts from './consts'

const tools = {...util}

export default {
  install (Vue) {
    Vue.prototype.$tools = tools
    Vue.prototype.$c = consts
  }
}