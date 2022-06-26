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

const emit = defineEmits(['update:modelValue'])

nextTick(() => {
  const toastEditor = new ToastEditor('#editor', `${props.modelValue}`, `${props.height}px`, `${props.placeholder}`)
  // 通过编辑器的change事件来实现响应式内容
  toastEditor.editor.on('change', (type: string) => {
    const content = toastEditor.editor[`get${type === 'markdown' ? 'Markdown' : 'HTML'}`]()
    emit('update:modelValue', content)
  })
})
</script>

<template>
  <div id="editor"></div>
</template>

<style lang="scss">
#editor {
  @apply bg-white;

  // 隐藏手动切换
  .toastui-editor-mode-switch {
    display: none !important;
  }

  // 声明全屏样式
  .fullscreen {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: #fff;
  }
}
</style>
