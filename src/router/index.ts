import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import autoload from './autoload'
import guard from './guard'
import userStore from '@/store/userStore'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes]
})

export async function setupRouter(app: App) {
  // 获取用户信息后才会加载页面
  const user = userStore()
  await user.getUserInfo()

  autoload(router)
  guard(router)
  app.use(router)
}

export default router
