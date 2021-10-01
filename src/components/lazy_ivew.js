/*
 * @Descripttion: 组件挂载
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-12 14:51:13
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-12 21:14:21
 */
import Vue from 'vue'
import { Modal, Message, Alert, Notice  } from 'view-design'

Vue.prototype.$Modal = Modal
Vue.prototype.$Message = Message
Vue.prototype.$Alert = Alert
Vue.prototype.$Notice = Notice
// Vue.prototype.Modal