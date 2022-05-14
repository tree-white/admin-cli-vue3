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
  <div class="admin w-screen min-h-screen md:grid grid-cols-[auto_1fr]">
    <!-- 左侧菜单 -->
    <Menu />

    <!-- 右侧内容 -->
    <div class="content h-screen bg-gray-100 grid grid-rows-[auto_1fr]">
      <div>
        <Navbar />
        <HistoryLink />
      </div>
      <div class="m-5 relative overflow-y-auto">
        <router-view #default="{ Component, route }">
          <Transition
            appear
            class="animate__animated"
            :enter-active-class="route.meta.enterClass ?? 'animate__fadeInRight'"
            :leave-active-class="route.meta.leaveClass ?? 'animate__fadeOutLeft'"
          >
            <Component :is="Component" class="absolute w-full" />
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
