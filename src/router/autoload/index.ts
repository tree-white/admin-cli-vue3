import { env } from '@/utils'
import { RouteRecordRaw } from 'vue-router'
import getRoutes from './view'
import autoloadModulesRoutes from './module'

let routes = [] as RouteRecordRaw[]
if (env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes()
} else {
  routes = autoloadModulesRoutes()
}

// todo 通过权限过滤掉路由

export default routes
