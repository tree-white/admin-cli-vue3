/**
 * 路由守卫
 */
import { CacheEnum } from './../enum/cacheEnum'
import userStore from '@/store/userStore'
import utils from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}

  // 执行路由守卫
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  // 路由拦截
  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    // 1.登录处理
    if (this.isLogin(to) === false) {
      return { name: 'login' }
    }

    if (this.isGuest(to) === false) {
      return from
    }
    // 如果已登录，获取用户信息后才会加载页面
    await this.getUserInfo()

    // todo 2.权限处理
  }

  // 获取用户信息
  private getUserInfo() {
    if (this.getToken()) {
      return userStore().getUserInfo()
    }
  }

  // 获取Token
  private getToken() {
    return utils.store.get(CacheEnum.TOKEN_NAME)?.token
  }

  // 是否为登录用户访问
  private isLogin(route: RouteLocationNormalized) {
    const state = Boolean(!route.meta.auth || (route.meta.auth && this.getToken()))
    if (state === false) {
      utils.store.set(CacheEnum.REDIRECT_ROUTE_NAME, route.name)
    }
    return state
  }

  // 是否为游客访问
  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.getToken()))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
