const { createEditor, createToolbar } = window.wangEditor

export default class {
  editor: wangEditor.Editor
  constructor(private selector: wangEditor.Selector, private toolbar: wangEditor.Toolbar) {
    // 生成编译器
    const { uploadImageApi, ...options } = this.selector.options
    // 初始默认配置
    const defaultConfig = {
      placeholder: '请输入内容啊',
      MENU_CONF: {
        uploadImage: {
          // 服务端地址【必传】
          server: uploadImageApi ?? '/api/upload',
          // 自定义上传图片的钩子
          ...this.updateImageHook()
        }
      }
    }
    // 创建编辑器
    this.editor = createEditor({
      ...options,
      selector: document.querySelector(options.el),
      config: Object.assign({}, defaultConfig, this.selector.config ?? {})
    })

    // 生成工具栏
    this.toolbar.options.el && this.createToolbar()
  }

  // 创建工具类
  createToolbar() {
    const { config, options } = this.toolbar
    const toolbarConfig: wangEditor.ToolbarConfig = Object.assign({}, config || {})

    // 创建工具栏
    createToolbar({
      ...options,
      editor: this.editor,
      selector: document.querySelector(options.el),
      config: toolbarConfig
    })
  }

  // 自定义上传图片
  updateImageHook() {
    type InsertFnType = (url: string, alt?: string, href?: string) => void
    return {
      // 上传之前触发
      onBeforeUpload(file: File) {
        // file 选中的文件，格式如 { key: file }
        return file

        // 可以 return
        // 1. return file 或者 new 一个 file ，接下来将上传
        // 2. return false ，不上传这个 file
      },

      // 上传进度的回调函数
      onProgress(progress: number) {
        // progress 是 0-100 的数字
        console.log('progress', progress)
      },

      // 单个文件上传成功之后
      onSuccess(file: File, res: any) {
        console.log(`${file.name} 上传成功`, res)
      },

      // 单个文件上传失败
      onFailed(file: File, res: any) {
        console.log(`${file.name} 上传失败`, res)
      },

      // 上传错误，或者触发 timeout 超时
      onError(file: File, err: any, res: any) {
        console.log(`${file.name} 上传出错`, err, res)
      },

      // 自定义插入图片
      customInsert(res: any, insertFn: InsertFnType) {
        // 从 res 中找到 url alt href ，然后插图图片
        insertFn(res.result.url)
      }
    }
  }
}
