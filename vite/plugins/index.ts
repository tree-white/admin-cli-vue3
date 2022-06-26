import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import { setupMockPlugin } from './mock'
import { visualizer } from 'rollup-plugin-visualizer'
import { setupElementPlugin } from './element'

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()]
  plugins.push(setupMockPlugin(isBuild))
  plugins.push(visualizer())
  setupElementPlugin(plugins)
  return plugins
}
