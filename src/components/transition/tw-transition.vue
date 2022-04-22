<script setup lang="ts">
import { reactive } from 'vue'

const props = defineProps({
  group: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: 'span'
  },
  name: {
    type: String,
    default: 'tw-transition'
  }
})
reactive(props)
</script>

<template>
  <transition-group v-if="group" :tag="tag" :name="name">
    <slot>这是group组</slot>
  </transition-group>
  <transition v-else :name="name">
    <slot>这是正常组</slot>
  </transition>
</template>

<style lang="scss" scoped></style>
