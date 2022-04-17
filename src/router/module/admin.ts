import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'admin',
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  children: [
    {
      name: 'adminHome',
      path: 'home',
      meta: { auth: true },
      component: () => import('@/views/admin/home.vue')
    }
  ]
} as RouteRecordRaw