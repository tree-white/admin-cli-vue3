import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'admin',
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { title: '仪表盘', icon: 'fas fa-home' } },

  children: [
    {
      name: 'adminHome',
      path: 'home',
      meta: { menu: { title: '工作台' } },
      component: () => import('@/views/admin/home.vue')
    }
  ]
} as RouteRecordRaw
