<script setup lang="ts">
import { ref } from 'vue'

const links = ref<{ title: string }[]>([
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' },
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' },
  { title: '编辑器' },
  { title: '订单列表' },
  { title: '用户管理' },
  { title: '销售总额' }
])
</script>

<template>
  <div class="bg-gray-50 px-5 py-3 grid-flow-col gap-2 justify-start hidden md:grid border-t border-b shadow-sm">
    <a
      href=""
      v-for="(link, index) of links"
      :key="index"
      class="bg-white py-2 px-3 rounded-md text-sm text-gray-600 border hover:shadow-md hover:scale-105 hover:bg-violet-400 hover:text-white duration-300"
    >
      {{ link.title }}
      <i class="fas fa-times ml-1 hover:rotate-180 duration-300"></i>
    </a>
  </div>
</template>

<style lang="scss" scoped></style>
