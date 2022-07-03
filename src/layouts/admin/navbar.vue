<script setup lang="ts">
  import userStore from '@/store/userStore'
  import utils from '@/utils'
  import menuService from '@/composables/menu'
  const userData = userStore()

  const isFullScreen = ref(false)
  // 全屏操作
  const fullScreen = () => {
    isFullScreen.value = !isFullScreen.value
    isFullScreen.value ? document.documentElement.requestFullscreen() : document.exitFullscreen()
  }
</script>

<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <div class="flex items-center">
      <!-- 控制菜单组件 -->
      <div @click="menuService.toggleState">
        <icon-right-square
          v-if="menuService.close.value"
          theme="multi-color"
          size="20"
          :fill="['#ffffff', '#4a4a4a', '#ffffff', '#43CCF8']"
          class="cursor-pointer hover:text-violet-700 hover:scale-105 duration-300"
        />
        <icon-left-square
          v-else
          theme="multi-color"
          size="20"
          :fill="['#ffffff', '#4a4a4a', '#ffffff', '#43CCF8']"
          class="cursor-pointer hover:bg-violet-700 hover:scale-105 duration-300"
        />
      </div>
      <!-- 面包屑 -->
      <TwBreadcrumb class="hidden md:block" />
    </div>

    <!-- 右侧内容 -->
    <div class="flex justify-center gap-4 items-center relative cursor-pointer">
      <!-- 通知组件 -->
      <TwNotification />

      <!-- 全屏按钮 -->
      <icon-off-screen-two theme="filled" size="20" fill="#4a4a4a" @click="fullScreen" v-if="isFullScreen" />
      <icon-full-screen-two theme="filled" size="20" fill="#4a4a4a" @click="fullScreen" v-else />

      <!-- 右侧功能 -->
      <div class="flex justify-center items-center relative group">
        <!-- 头像 -->
        <img :src="userData.info?.avatar" alt="" class="w-8 h-8 rounded-full object-cover" />

        <!-- 用户名 -->
        <span class="ml-1 text-sm text-gray-600">{{ userData.info?.name }}</span>

        <!-- 弹出菜单 -->
        <section
          class="group-hover:block hidden absolute z-10 top-full bg-white shadow-sm px-5 whitespace-nowrap border rounded-md"
        >
          <div class="flex items-center border-b py-2">
            <icon-user theme="filled" size="20" fill="#4a4a4a" />
            <span class="text-xs text-gray-600 ml-3">个人中心</span>
          </div>
          <div class="flex items-center border-b py-2">
            <icon-setting-config theme="filled" size="20" fill="#4a4a4a" />
            <span class="text-xs text-gray-600 ml-3">用户管理</span>
          </div>
          <div class="flex items-center py-2" @click="utils.user.logout">
            <icon-logout theme="filled" size="20" fill="#4a4a4a" />
            <span class="text-xs text-gray-600 ml-3">退出登录</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
