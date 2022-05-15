import utils from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'
import { IMenu } from '#/menu'
import { ref } from 'vue'
import router from '@/router'
import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'

class Menu {
  // 菜单
  public menus = ref<IMenu[]>([])
  // 历史菜单
  public history = ref<IMenu[]>([])
  // 菜单组件开关
  public close = ref(false)
  // 记录路由
  public route = ref(null as null | RouteLocationNormalized)

  constructor() {
    this.menus.value = this.getMenusByRoute()
    this.history.value = utils.store.get(CacheEnum.HISTORY_MENUS) ?? []
  }

  /** 切换菜单 */
  toggleParentMenu(menu: IMenu) {
    this.menus.value.forEach(m => {
      m.isClick = false
      if (m == menu) m.isClick = true
    })
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

  /** 添加历史菜单 */
  addHistoryMenu(route: RouteLocationNormalized) {
    if (!route.meta?.menu) return
    this.route.value = route
    console.log('route=>', route)
    // 生成菜单
    const menu: IMenu = { ...route.meta?.menu, route: route.name as string }
    // 是否已存在
    const isHas = this.history.value.some(menu => menu.route == route.name)
    // 添加菜单
    if (!isHas) this.history.value.push(menu)
    // 限制历史菜单只记录10个
    if (this.history.value.length > 10) this.history.value.shift()
    // 存储到本地
    utils.store.set(CacheEnum.HISTORY_MENUS, this.history.value)
  }

  /** 删除历史菜单 */
  removeHistoryMenu(menu: IMenu) {
    const index = this.history.value.indexOf(menu)
    this.history.value.splice(index, 1)
    utils.store.set(CacheEnum.HISTORY_MENUS, this.history.value)
    const count = this.history.value.length
    console.log('route=>', router)
    router.push({ name: count > 0 ? this.history.value[count - 1].route : 'adminHome' })
  }
}

export default new Menu()
