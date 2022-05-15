<script setup lang="ts">
import { nextTick } from 'vue'
import ToastEditor from './toastEditor'

interface IProps {
  modelValue?: string
  height?: number
  placeholder?: string
}
// 接收默认内容数据
const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  height: 500,
  placeholder: ''
})

nextTick(() => {
  new ToastEditor('#editor', `${props.modelValue}`, `${props.height}px`, `${props.placeholder}`)
})
</script>

<template>
  <div id="editor"></div>
</template>

<style lang="scss">
#editor {
  @apply bg-white;
}
</style>
