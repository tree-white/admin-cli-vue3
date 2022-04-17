import { CacheEnum } from '@/enum/cacheEnum'
import { IMenu } from '#/menu'
import router from '@/router'
import utils from '@/utils'
import { defineStore } from 'pinia'
import { RouteLocationNormalized, useRouter } from 'vue-router'

export default defineStore('menu', {
  state: () => ({
    menus: [] as IMenu[],
    historyMenus: [] as IMenu[]
  }),
  actions: {
    /** 初始化 */
    init() {
      this.getMenusByRoute()
      this.historyMenus = utils.store.get(CacheEnum.HISTORY_MENUS) ?? []
    },
    /** 添加历史菜单 */
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.menu) return
      // 生成菜单
      const menu: IMenu = { ...route.meta?.menu, route: route.name as string }
      // 是否已存在
      const isHas = this.historyMenus.some(menu => menu.route == route.name)
      // 添加菜单
      if (!isHas) this.historyMenus.push(menu)
      // 限制历史菜单只记录10个
      if (this.historyMenus.length > 10) this.historyMenus.shift()
      // 存储到本地
      utils.store.set(CacheEnum.HISTORY_MENUS, this.historyMenus)
    },
    /** 删除历史菜单 */
    removeHistoryMenu(menu: IMenu) {
      const index = this.historyMenus.indexOf(menu)
      this.historyMenus.splice(index, 1)
      utils.store.set(CacheEnum.HISTORY_MENUS, this.historyMenus)
      const count = this.historyMenus.length
      console.log('route=>', router)
      router.push({ name: count > 0 ? this.historyMenus[count - 1].route : 'adminHome' })
    },
    /** 根据路由获取菜单 */
    getMenusByRoute() {
      this.menus = router
        .getRoutes()
        .filter(route => route.children.length && route.meta.menu)
        .map(route => {
          const menu: IMenu = { ...route.meta.menu }
          menu.children = route.children
            .filter(route => route.meta?.menu)
            .map(route => ({ ...route.meta?.menu, route: route.name })) as IMenu[]

          return menu
        })
    }
  }
})
