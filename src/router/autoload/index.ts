import utils from '@/utils'
import { Router, RouteRecordRaw } from 'vue-router'
import getRoutes from './view'
import autoloadModulesRoutes from './module'
import userStore from '@/store/userStore'

let routes: RouteRecordRaw[] = utils.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoloadModulesRoutes()

// todo 通过权限过滤掉路由
function autoload(router: Router) {
  // 获取到登录信息
  const user = userStore()
  // 过滤路由
  routes = routes.map(route => {
    route.children = route.children?.filter(child => {
      const permission = child.meta?.permission
      return permission ? user.info?.permissions.includes(permission) : true
    })
    return route
  })

  routes.forEach(route => router.addRoute(route))
}

export default autoload
