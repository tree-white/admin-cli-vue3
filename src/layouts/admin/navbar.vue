<script setup lang="ts">
import userStore from '@/store/userStore'
import utils from '@/utils'
import menuService from '@/composables/menu'
const userData = userStore()

// 全屏操作
const fullScreen = () => {
  document.documentElement.requestFullscreen()
}
</script>

<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <div class="flex items-center">
      <!-- 控制菜单组件 -->
      <div @click="menuService.toggleState">
        <i
          class="fas mr-2 text-gray-700 cursor-pointer hover:text-violet-700 hover:scale-105 duration-300"
          :class="`fa-square-caret-${menuService.close.value ? 'right' : 'left'}`"
        ></i>
      </div>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
        <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 右侧内容 -->
    <div class="flex justify-center items-center relative group cursor-pointer">
      <!-- 全屏按钮 -->
      <i class="fas fa-desktop mr-2" @click="fullScreen"></i>

      <!-- 头像 -->
      <img :src="userData.info?.avatar" alt="" class="w-8 h-8 rounded-full object-cover" />

      <!-- 用户名 -->
      <span class="ml-1 text-sm text-gray-600">{{ userData.info?.name }}</span>

      <!-- 弹出菜单 -->
      <section
        class="group-hover:block hidden absolute top-full bg-white shadow-sm px-5 whitespace-nowrap border rounded-md"
      >
        <div class="flex items-center border-b py-2">
          <i class="fa-solid fa-person-shelter"></i>
          <span class="text-xs text-gray-600 ml-3">个人中心</span>
        </div>
        <div class="flex items-center border-b py-2">
          <i class="fas fa-square-rss"></i>
          <span class="text-xs text-gray-600 ml-3">用户管理</span>
        </div>
        <div class="flex items-center py-2" @click="utils.user.logout">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span class="text-xs text-gray-600 ml-3">退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
