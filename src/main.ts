import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import '@/styles/global.scss'
import menuService from './composables/menu'

async function bootstrap() {
  const app = createApp(App)
  setupPlugins(app)
  setupRouter(app)

  // 当路由加载完毕后才进行下一步挂载
  await router.isReady()
  console.log('路由挂载完毕')
  // 手动更新菜单内容
  menuService.updateMenusAndHistory()
  app.mount('#app')
}

bootstrap()
