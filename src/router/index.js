import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopLogin from '../components/ShopLogin'
import ShopHome from '../components/ShopHome'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: ShopLogin
    },
    {
      path: '/home',
      component: ShopHome
    }
  ]
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
