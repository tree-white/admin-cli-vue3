<script setup lang="ts">
  const content = ref('<p>hello <strong>world</strong></p>')
</script>

<template>
  <div>
    <WangEditorEditor v-model="content" />
  </div>
</template>

<style lang="scss" scoped></style>
