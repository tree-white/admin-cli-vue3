<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/images/宇航员.jpg" alt="" class="w-40 h-40 object-cover rounded-full border-8 mb-5" />
    <div>
      <router-link :to="{ name: 'adminHome' }" class="tw-button">后台管理</router-link>
      <router-link :to="{ name: 'login' }" class="tw-button ml-3 tw-danger">用户登录</router-link>
    </div>

    <div class="text-white mt-5 text-xs drop-shadow-md">楷子最帅</div>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
  route: { name: 'home' }
}
</script>
