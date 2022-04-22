import { IMenu } from '#/menu'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 是否登录授权 */
    auth?: boolean
    /** 是否游客 */
    guest?: boolean
    /** 访问权限 */
    permissions?: string[]
    menu?: IMenu
    /** 动画 */
    enterClass?: string
    leaveClass?: string
  }
}
