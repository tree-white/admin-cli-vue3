import { uploadImage } from '@/apis/uploadApi'

export default class {
  // 定义编辑器实例
  editor: toastui.Editor
  isFullscreen: boolean
  constructor(el: string, initialValue: string, height: string, placeholder: string = '请输入内容...') {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height,
      initialValue,
      placeholder,
      toolbarItems: this.toolbar()
    })

    this.isFullscreen = false

    this.ImageHook()
  }

  private toolbar() {
    return [
      ['heading', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      [
        {
          el: this.fullscreen(),
          command: 'bold',
          tooltip: '全屏'
        }
      ]
    ]
  }

  // 自定义的全屏按钮
  private fullscreen() {
    const button = document.createElement('button') as HTMLButtonElement
    button.innerHTML = '全屏' // 按钮名称
    button.style.margin = '0' // 样式修改

    // 按钮点击事件监听
    button.addEventListener('click', () => {
      const ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
      ui.classList.toggle('fullscreen')
      this.isFullscreen = ui.className.includes('fullscreen')
      button.innerHTML = this.isFullscreen ? '窗口' : '全屏'
    })
    document.documentElement.addEventListener('keyup', (event: KeyboardEvent) => {
      if (this.isFullscreen && event.key === 'Escape') {
        const ui = document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
        ui.classList.remove('fullscreen')
        this.editor.focus()
        this.isFullscreen = false
        button.innerHTML = '全屏'
      }
    })
    return button
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
