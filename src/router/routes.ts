import { RouteRecordRaw } from 'vue-router'

const routes = [
  // 首页
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  // 登录页面
  {
    path: '/login',
    name: 'login',
    meta: { guest: true },
    component: () => import('@/views/auth/login.vue')
  },
  // 注册页面
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/register.vue')
  },
  // 文章页面
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article.vue')
  },
  // 其他任何页面
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/error/404.vue')
  }
] as RouteRecordRaw[]

export default routes
