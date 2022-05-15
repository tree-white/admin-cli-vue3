<!-- 面包屑组件 -->
<script setup lang="ts">
import menuService from '@/composables/menu'
const route = menuService.route.value
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-if="route">
      <el-breadcrumb-item v-for="(r, index) of route.matched" :key="index" :to="{ path: r.path }">
        {{ r.meta.menu?.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style lang="scss" scoped></style>
