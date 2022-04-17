import utils from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'
import { IMenu } from '#/menu'
import { ref } from 'vue'
import router from '@/router'

class Menu {
  public menus = ref<IMenu[]>([])
  public history = ref<IMenu[]>([])

  constructor() {
    this.menus.value = this.getMenusByRoute()
    this.history.value = utils.store.get(CacheEnum.HISTORY_MENUS) ?? []
  }

  /** 根据路由获取菜单 */
  getMenusByRoute() {
    return router
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

export default new Menu()
