import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'error',
  path: '/error',
  component: () => import('@/layouts/error.vue'),
  meta: { title: '错误页面', icon: 'fas fa-baseball-ball', show: true },
  children: [
    {
      name: 'error403',
      path: '403',
      component: () => import('@/views/error/403.vue'),
      meta: { title: '403', icon: 'fas fa-ban', show: true }
    },
    { name: 'error404', path: '404', component: () => import('@/views/error/404.vue') },
    { name: 'error500', path: '500', component: () => import('@/views/error/500.vue') }
  ]
} as RouteRecordRaw
