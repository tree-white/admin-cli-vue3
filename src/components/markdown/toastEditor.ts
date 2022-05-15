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
  }
}
