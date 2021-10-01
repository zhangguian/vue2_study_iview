/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangguian
 * @Date: 2021-09-04 16:22:57
 * @LastEditors: zhangguian
 * @LastEditTime: 2021-09-15 10:16:38
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import formCreate from '@form-create/iview4'
// import 'view-design/dist/styles/iview.css';
import './index.less'
// import '@/my-theme/index.less';
import { VueAxios } from '@/network/request'

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(formCreate);

Vue.use(VueAxios);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
