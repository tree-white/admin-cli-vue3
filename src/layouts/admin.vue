<script setup lang="ts">
import Menu from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import HistoryLink from './admin/historyLink.vue'
</script>

<template>
  <div class="admin min-h-screen max-w-screen flex">
    <!-- 左侧菜单 -->
    <Menu class="hidden md:block" />

    <!-- 右侧内容 -->
    <div class="content flex-1 bg-gray-100">
      <Navbar />
      <HistoryLink class="" />
      <div class="m-5">
        <router-view />
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
