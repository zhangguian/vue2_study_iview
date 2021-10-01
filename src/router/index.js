import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'view-design'

import routes from './routers'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach((to,from) => {
  iView.LoadingBar.finish()
})
export default router
