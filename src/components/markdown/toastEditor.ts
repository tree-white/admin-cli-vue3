import { uploadImage } from '@/apis/uploadApi'

export default class {
  // 定义编辑器实例
  editor: toastui.Editor
  constructor(el: string, initialValue: string, height: string, placeholder: string = '请输入内容...') {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height,
      initialValue,
      placeholder
    })

    this.ImageHook()
  }

  private ImageHook() {
    // 先移除默认添加图片钩子
    this.editor.removeHook('addImageBlobHook')

    // 再自定义添加图片钩子
    this.editor.addHook('addImageBlobHook', async (blob: any, callback: Function) => {
      console.log('blob=>', blob)
      const form = new FormData()
      form.append('file', blob, blob.name)

      const response = await uploadImage(form)
      console.log('response=>', response.result.url)

      callback(response.result.url, blob.name)
    })
  }
}
