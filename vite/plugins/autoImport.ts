import { Plugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function setupAutoImportPlugin(plugins: Plugin[]) {
  plugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver()],
      // 自动引入 vue 和 vue-router 的Api
      imports: ['vue', 'vue-router'],
      // 生成类型文件
      dts: 'types/auto-imports.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      // 该属性默认就是，可以不写，或要更改自动导入目录时写
      dirs: ['src/components'],
      // 组件名称包含目录 防止同名组件冲突
      directoryAsNamespace: true,
      // 指定类型声明文件 - [true]在项目根目录创建，不写默认放在 root根目录上
      dts: 'types/components.d.ts'
    })
  )
}
