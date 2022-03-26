import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'

async function bootstrap() {
	const app = createApp(App)
	setupRouter(app)
	await router.isReady() // 当路由加载完毕后才进行下一步挂载
	app.mount('#app')
}

bootstrap()
