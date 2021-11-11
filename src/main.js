/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 16:22:57
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-11-05 23:27:34
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import formCreate from '@form-create/iview4'
import Print from 'vue-print-nb'

// import 'view-design/dist/styles/iview.css';
// import '../src/my-theme/index.less'
import './index.less'
// import '@/my-theme/index.less';
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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
