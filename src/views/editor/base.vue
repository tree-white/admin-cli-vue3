<script setup lang="ts">
  // const content = ref('<p>hello <strong>world</strong></p>')
  const content = ref('')
</script>

<template>
  <div>
    <WangEditorEditor v-model="content" />
    {{ content }}
  </div>
</template>

<style lang="scss" scoped></style>
