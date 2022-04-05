import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'

export function setupPlugins(app: App) {
	autoloadComponent(app)
	setupTailwindcss()
}

/** 自动注册全局组件 */
function autoloadComponent(app: App) {
	const components = import.meta.globEager('../components/form/*.vue')
	Object.keys(components).forEach((key) => {
		const name = key.split('/').pop()?.split('.').shift()!
		app.component(name, components[key].default)
	})
}
