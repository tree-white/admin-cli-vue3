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
      class="bg-white py-2 px-3 rounded-md text-sm text-gray-600 border hover:shadow-md hover:scale-105 duration-300"
      :class="{ 'bg-violet-400 !text-white': menu.route === $route.name }"
    >
      <router-link :to="{ name: menu.route }">{{ menu.title }}</router-link>

      <i
        v-show="menu.route === $route.name"
        class="fas fa-times ml-2 hover:rotate-180 duration-300 hover:text-yellow-400"
        @click="menuService.removeHistoryMenu(menu)"
      ></i>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
