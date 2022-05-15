export default class {
  // 定义编辑器实例
  markdown
  constructor(el: string, height: string, initialValue: string) {
    this.markdown = new toastui.Editor({
      el: document.querySelector(el),
      previewStyle: 'vertical',
      height,
      initialValue
    })

    this.markdown.getMarkdown()
  }
}
