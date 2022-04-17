import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { guest: true },
    component: () => import('@/views/auth/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/register.vue')
  },
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/error/404.vue')
  }
] as RouteRecordRaw[]

export default routes
