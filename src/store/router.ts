import { defineStore } from 'pinia'
import { RouteRecordNormalized, useRouter } from 'vue-router'

export const router = defineStore('router', {
  state: () => ({
    // routes: [] as RouteRecordRaw[]
    routes: getRoutes()
  })
})

/** 获取符合展示条件的路由信息 */
function getRoutes(): RouteRecordNormalized[] {
  const router = useRouter()
  const routes = router
    .getRoutes()
    .filter(route => route.children.length && route.meta.show)
    .map(route => {
      route.children = route.children.filter(route => route.meta?.show)
      return route
    })
  return routes
}
