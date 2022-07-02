import { http } from '@/plugins/axios'

export interface IArticle {
  id: number
  title: string
  content: string
  createTime: string
  author: string
}

export function article() {
  return http.request<IArticle[]>({ url: `article` })
}
