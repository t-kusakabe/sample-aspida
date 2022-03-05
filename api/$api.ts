/* eslint-disable */
// prettier-ignore
import type { AspidaClient } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './articles/_articleId@number'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/articles'
  const GET = 'GET'

  return {
    articles: {
      _articleId: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option: { query: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
