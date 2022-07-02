<script setup lang="ts">
import { nextTick, ref } from 'vue'

const activeName = ref('site')
const show = ref(false)
// 实现点击其他地方关闭tabs
nextTick(() => {
  document.addEventListener('click', e => {
    show.value = false
  })
})
</script>

<template>
  <div class="notification">
    <i class="fas fa-align-justify" @click.stop="show = !show"></i>
    <el-tabs v-model="activeName" class="lists" v-show="show" @click.stop>
      <el-tab-pane label="系统通知" name="site">
        <a href="">这是提示内容阿萨德发送到发家你是单个爱上大纲爱顺带几个啊</a>
        <a href="">这是提示内容阿萨德发送到发家你是单个爱上大纲爱顺带几个啊</a>
        <a href="">这是提示内容阿萨德发送到发家你是单个爱上大纲爱顺带几个啊</a>
        <a href="">这是提示内容阿萨德发送到发家你是单个爱上大纲爱顺带几个啊</a>
      </el-tab-pane>
      <el-tab-pane label="站内消息" name="message"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  @apply relative;
  .lists {
    @apply absolute bg-white px-3 top-[35px] py-2 border rounded-md shadow-md right-0 z-10 w-[300px] text-sm;
    a {
      @apply truncate overflow-hidden block border-b pb-2 mb-3 hover:text-fuchsia-700;
    }
  }
}
</style>
