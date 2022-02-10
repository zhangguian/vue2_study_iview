
import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'view-design'


import routes from './routers'

// 解决多次点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const LOGIN_PAGE_NAME = 'login'
  const token = window.localStorage.getItem('token')
  iView.LoadingBar.start()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: 'workbench_page' // 跳转到homeName页
    })
  }
  next()
})

router.afterEach((to,from) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0);
})
export default router
