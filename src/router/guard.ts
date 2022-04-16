/**
 * 路由守卫
 */
import { store } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}

  // 执行路由守卫
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  // 路由拦截
  private beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    // 1.登录处理
    if (this.isLogin(to) === false) {
      return { name: 'login' }
    }

    if (this.isGuest(to) === false) {
      return from
    }

    // todo 2.权限处理
  }

  // 获取Token
  private getToken() {
    return store.get('token')?.token
  }

  // 是否需要登录访问
  private isLogin(route: RouteLocationNormalized) {
    return Boolean(!route.meta.auth || (route.meta.auth && this.getToken()))
  }

  // 是否为游客访问
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.getToken()))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
