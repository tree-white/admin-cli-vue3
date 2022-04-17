<script setup lang="ts">
import Menu from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
import menuStore from '@/store/menuStore'
import { onBeforeRouteUpdate } from 'vue-router'

const menu = menuStore()
menu.init()
onBeforeRouteUpdate(to => {
  console.log('更新了')
  // 添加历史菜单
  menu.addHistoryMenu(to)
})
</script>

<template>
  <div class="admin min-h-screen max-w-screen flex">
    <!-- 左侧菜单 -->
    <!-- <Menu class="hidden md:block" /> -->

    <!-- 右侧内容 -->
    <div class="content flex-1 bg-gray-100">
      <Navbar />
      <HistoryLink />
      <div class="m-5">
        <router-view #default="{ Component }">
          <Transition enter-active-class="animate__animated animate__bounceInRight">
            <Component :is="Component" />
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
