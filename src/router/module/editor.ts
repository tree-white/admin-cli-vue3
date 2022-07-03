import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { title: '编辑器', icon: 'EditOne' } },
  children: [
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { permission: 'editor_markdown', menu: { title: 'Markdown' } }
    },
    {
      name: 'base',
      path: 'base',
      component: () => import('@/views/editor/base.vue'),
      meta: { permission: 'article_edit', menu: { title: '富文本编辑器' } }
    }
  ]
} as RouteRecordRaw
