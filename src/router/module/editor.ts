import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { title: '编辑器', icon: 'fas fa-edit', show: true },
  children: [
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { title: 'Markdown', show: true }
    },
    {
      name: 'base',
      path: 'base',
      component: () => import('@/views/editor/base.vue'),
      meta: { title: '基础', show: true }
    }
  ]
} as RouteRecordRaw
