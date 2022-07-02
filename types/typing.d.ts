import { ICreateEditorOption, ICreateToolbarOption } from '@wangeditor/editor/dist/editor/src/create'

declare global {
  namespace wangEditor {
    interface IOption {
      uploadImageApi?: string
      editor: ICreateEditorOption
      toolbar: ICreateToolbarOption
    }
    class wangEditor {
      constructor(option: IOption)
    }
  }
}
