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
    const options: wangEditor.IOption = {
      uploadImageApi: props.uploadImageApi,
      editor: {
        selector: '#wangEditorContainer',
        html: props.modelValue,
        config: {
          onChange: (editor: any) => emit('update:modelValue', editor.getHtml())
        },
        mode: 'default'
      },
      toolbar: {
        editor: null,
        selector: '#wangEditorToolbar'
      }
    }
    new wangEditor(options)
  })
</script>

<template>
  <div>
    <div id="wangEditorToolbar"></div>
    <div id="wangEditorContainer" :style="editorStyle"></div>
  </div>
</template>

<style lang="scss" scoped></style>
