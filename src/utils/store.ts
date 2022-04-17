import config from '../../package.json'
const { name: projectName } = config

const getProKey = (name: string): string => `${projectName}_${name}`

export interface IData {
  expire?: number
  token?: string
  [key: string]: any
}
export default {
  // 存储到localStorage
  set(key: string, data: any, expire?: number): void {
    const proKey = getProKey(key)
    const cache: IData = { data }
    if (expire) {
      cache['expire'] = +new Date() + expire * 1000
    }
    localStorage.setItem(proKey, JSON.stringify(cache))
  },

  // 从localStorage获取
  get(key: string) {
    const proKey = getProKey(key)
    const localCache = localStorage.getItem(proKey)
    if (localCache) {
      const cache = JSON.parse(localCache) as IData
      if (cache.expire && +new Date() > cache.expire) {
        this.remove(key)
        return null
      }
      return cache.data
    }
    return null
  },
  // 从localStorage删除
  remove(key: string) {
    const proKey = getProKey(key)
    localStorage.removeItem(proKey)
  }
}
