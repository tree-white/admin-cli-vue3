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
