<script setup lang="ts">
  import { ref } from 'vue'

  const content = ref('## 这是标题')
</script>

<template>
  <div>
    <MarkdownEditor v-model="content" :height="300" placeholder="请输入 Markdown 内容" />
  </div>
</template>

<style lang="scss" scoped></style>
