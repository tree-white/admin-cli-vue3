/**
 * 路由Api自动加载
 */

import { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.globEager('../layouts/*.vue')
const views = import.meta.globEager('../views/**/*.vue')

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const childrenRoutes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${String(layoutRoute.name)}/`)) {
      const route = getRouteByModule(file, module)
      childrenRoutes.push(route)
    }
  })
  return childrenRoutes
}

function nameFormat(name: string) {
  const index = name.indexOf('/')
  if (index !== -1) {
    const arrStr = name.split('')
    arrStr.splice(index, 1)
    arrStr[index] = arrStr[index].toUpperCase()
    let newName = arrStr.join('')
    if (newName.includes('/')) {
      newName = nameFormat(newName)
    }
    return newName
  } else {
    return name
  }
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  // console.log(file.split('/').pop()?.split('.')[0])
  // console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name)
  // console.log(file.replace(/.+layouts\/|\.vue/gi, ''))
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    path: `/${name}`,
    name: nameFormat(name),
    component: module.default
  } as RouteRecordRaw

  // return route // 正常返回
  return Object.assign(route, module.default?.route) // 自定义路由合并
}

export default getRoutes
