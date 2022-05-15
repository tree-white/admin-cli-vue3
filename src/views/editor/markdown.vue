<script setup lang="ts">
import { ref } from 'vue'

const content = ref('## 这是标题')
</script>

<template>
  <div>
    <ToastEditor v-model="content" :height="300" placeholder="请输入 Markdown 内容" />
    {{ content }}
  </div>
</template>

<style lang="scss" scoped></style>
