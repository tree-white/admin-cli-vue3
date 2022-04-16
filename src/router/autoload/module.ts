import { RouteRecordRaw } from 'vue-router'

// 根据模块来注册路由
export default function autoloadModuleRoutes() {
  const modules = import.meta.globEager('../module/**/*.ts')

  const routes = [] as RouteRecordRaw[]
  Object.keys(modules).forEach(key => {
    console.log(key)
    routes.push(modules[key].default)
  })

  return routes
}
