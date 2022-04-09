/**
 * 路由守卫
 */
import { store } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
	constructor(private router: Router) {}

	// 执行路由守卫
	public run() {
		this.router.beforeEach((to, from) => {
			// 获取Token
			const token = store.get('token')?.token
			// 1.登录处理
			console.log('to=>', to.meta)
			if (this.isLogin(to, token) === false) {
				return { name: 'login' }
			}

			if (this.isGuest(to, token) === false) {
				return from
			}

			// 2.权限处理
		})
	}

	// 判断是否需要登录
	private isLogin(route: RouteLocationNormalized, token: string | undefined) {
		return Boolean(!route.meta.auth || (route.meta.auth && token))
	}

	// 判断是否为游客
	private isGuest(route: RouteLocationNormalized, token: string | undefined) {
		return Boolean(!route.meta.guest || (route.meta.guest && !token))
	}
}

export default (router: Router) => {
	new Guard(router).run()
}
