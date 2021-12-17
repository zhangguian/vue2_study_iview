/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 16:22:57
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-12-17 13:34:27
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import ViewUI from 'view-design';
import formCreate from '@form-create/iview4'
import Print from 'vue-print-nb'

import './index.less'
import './assets/iconfont/color_icon/iconfont.css';
import './assets/iconfont/color_icon/iconfont.js';
import utils from './utils'
import { VueAxios } from '@/network/request'

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(formCreate);
Vue.use(Print);
Vue.use(utils);

Vue.use(VueAxios);


