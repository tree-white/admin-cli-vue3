import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/editor.vue'),
  children: [
    { name: 'markdown', path: 'markdown', component: () => import('@/views/editor/markdown.vue') },
    { name: 'base', path: 'base', component: () => import('@/views/editor/base.vue') }
  ]
} as RouteRecordRaw
