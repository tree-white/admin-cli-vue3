import utils from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'
import { IMenu } from '#/menu'
import { ref } from 'vue'
import router from '@/router'
import { RouteLocationNormalizedLoaded } from 'vue-router'

class Menu {
  // 菜单
  public menus = ref<IMenu[]>([])
  // 历史菜单
  public history = ref<IMenu[]>([])
  // 菜单组件开关
  public close = ref(false)

  constructor() {
    this.menus.value = this.getMenusByRoute()
    this.history.value = utils.store.get(CacheEnum.HISTORY_MENUS) ?? []
  }
  /** 开启/关闭菜单组件 */
  toggleState() {
    this.close.value = !this.close.value
    console.log(this.close.value)
  }

  /** 选择菜单 */
  setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach(menu => {
      menu.isClick = false
      menu.children?.forEach(cMenu => {
        cMenu.isClick = false
        if (cMenu.route == route.name) {
          menu.isClick = true
          cMenu.isClick = true
        }
      })
    })
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
