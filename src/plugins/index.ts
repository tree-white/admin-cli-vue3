import { App } from 'vue'
import setupPinia from './pinia'
import { setupTailwindcss } from './tailwindcss'
import setupIconPark from './iconpark'

export function setupPlugins(app: App) {
  setupTailwindcss()
  setupPinia(app)
  setupIconPark(app)
}

// /** 自动注册全局组件 */
// function autoRegisterComponent(app: App) {
//   const components = import.meta.globEager('../components/**/*.vue')
//   Object.keys(components).forEach(key => {
//     const name = key.split('/').pop()?.split('.').shift()!
//     app.component(name, components[key].default)
//   })
// }
