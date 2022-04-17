import userApi, { ILoginData } from '@/apis/userApi'
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router'
import userStore from '@/store/userStore'
import utils from '@/utils'

export async function login(values: ILoginData) {
  const {
    result: { token }
  } = await userApi.login(values)
  // 存储token
  utils.store.set(CacheEnum.TOKEN_NAME, { token })
  // 跳转到首页
  router.push({ name: 'home' })
}

export function logout() {
  utils.store.remove(CacheEnum.TOKEN_NAME)
  router.push({ name: 'home' })
  userStore().info = null
}
