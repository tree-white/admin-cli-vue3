<script setup lang="ts">
  import menuService from '@/composables/menu'
</script>

<template>
  <div
    v-show="menuService.history.value.length"
    class="bg-gray-50 px-5 py-3 grid-flow-col gap-2 justify-start hidden md:grid border-t border-b shadow-sm cursor-pointer"
  >
    <div
      v-for="(menu, index) of menuService.history.value"
      :key="index"
      class="flex items-center bg-white py-2 px-3 rounded-md text-sm text-gray-600 border hover:shadow-md hover:scale-105 duration-300"
      :class="{ 'bg-violet-400 !text-white': menu.route === $route.name }"
    >
      <router-link :to="{ name: menu.route }">{{ menu.title }}</router-link>

      <icon-close
        v-show="menu.route === $route.name"
        theme="multi-color"
        size="12"
        :fill="['#ffffff', '#4a4a4a', '#ffffff', '#43CCF8']"
        class="ml-2 hover:rotate-180 duration-300"
        @click="menuService.removeHistoryMenu(menu)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
