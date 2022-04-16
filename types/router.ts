import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 是否登录授权 */
    auth?: boolean
    /** 用户身份 */
    guest?: boolean
    /** 路由是否在菜单中显示 */
    show?: boolean
    /** 菜单标题 */
    title?: string
    /** 菜单图标 */
    icon?: string
  }
}
