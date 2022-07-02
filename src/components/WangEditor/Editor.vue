<script setup lang="ts">
  import { nextTick } from 'vue'
  import wangEditor from './Editor'
  interface Props {
    height?: string
    modelValue?: string
    uploadImageApi?: string
  }
  const props = withDefaults(defineProps<Props>(), {
    height: '300px',
    modelValue: '',
    uploadImageApi: '/api/upload/image'
  })
  const emit = defineEmits(['update:modelValue'])
  const editorStyle = {
    height: props.height
  }
  nextTick(() => {
    const selector: wangEditor.Selector = {
      options: {
        el: '#wangEditorContainer',
        html: props.modelValue,
        uploadImageApi: props.uploadImageApi
      },
      config: {
        onChange: (editor: any) => {
          // 当编辑器选区、内容变化时，即触发
          // console.log("content", editor.children);
          // console.log("html", editor.getHtml());
          emit('update:modelValue', editor.getHtml())
        }
      }
    }
    console.log('selector=>', selector)
    const toolbar: wangEditor.Toolbar = {
      options: {
        el: '#wangEditorToolbar'
      }
    }
    new wangEditor(selector, toolbar)
  })
</script>

<template>
  <div>
    <div id="wangEditorToolbar"></div>
    <div id="wangEditorContainer" :style="editorStyle"></div>
  </div>
</template>

<style lang="scss" scoped></style>
