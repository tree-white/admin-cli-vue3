declare namespace toastui {
  class Editor {
    constructor(options: any)
    getMarkdown: () => string
    getHTML: () => string
    on: (evnet: string, callback: Function) => void
    removeHook: (type: string) => void
    addHook: (type: string, handle: Function) => void
    setHeight: (height: string) => void
    focus: () => void
  }
}

declare namespace wangEditor {
  // 枚举
  enum Mode {
    'default',
    'simple'
  }
  // 通用选项
  interface commonOptions {
    el: string
    mode?: Mode
  }
  // 编辑器选项
  interface SelectorOptions extends commonOptions {
    config?: SelectorConfig
    html?: string
    uploadImageApi?: string
  }
  // 编辑器配置
  interface SelectorConfig {
    placeholder?: string
    height?: string
    html?: string
    onChange?: (editor: any) => void
  }
  interface Selector {
    config?: SelectorConfig
    options: SelectorOptions
  }

  // 工具类选项
  interface ToolbarOptions extends commonOptions {
    editor?: Editor
    config?: ToolbarConfig
  }
  // 工具类配置
  interface ToolbarConfig {}
  interface Toolbar {
    config?: ToolbarConfig
    options: ToolbarOptions
  }

  class Editor {
    constructor(selector: Selector, toolbar: Toolbar)
    createEditor: () => void
    createToolbar: () => void
    config: {
      [key: string]: any
    }
  }
}
