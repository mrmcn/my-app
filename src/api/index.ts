import axios from 'axios'
import { queryClient } from '../query-client'
import { auth, authRefreshOptions } from '../services'
import { queryKey } from '../services/const'
import { extractData, fakeFilter } from './fake'
import { url } from './url'

export const instance = axios.create({ baseURL: url.baseURL })

instance.interceptors.request.use((config) => {
  const tokens = auth.tokens()

  switch (config.url) {
    case url.accAdd:
      config.data = extractData(config.data)
      break
    case url.login:
      config.data = Object.fromEntries(config.data)
      break
    case url.sendOrder:
      config.data = JSON.parse(Object.fromEntries(config.data).sendOrder)
      break
    case url.search:
      const { search } = Object.fromEntries(config.params)
      config.params = { q: search }
      break
    case url.accAction:
      config.url = `${url.accAction}${auth.userId()}`
      if (config.method === 'put') config.data = extractData(config.data)
      break
    case url.getOrders:
      config.url = `${url.getOrders}${auth.userId()}`
      break
    case url.product:
      config.url = `${url.product}${config.params.productId}`
      break
    case url.categoryProducts:
      const params = config.params
      config.url = `${url.categoryProducts}${params.category}`
      config.params = params.params
      break
    default:
  }

  if (tokens?.token && config.url !== url.authRefresh) {
    config.headers!.Authorization = `Bearer ${tokens.token}`
    const refresh = queryClient.getQueryData(authRefreshOptions().queryKey)
    if (!refresh) auth.refresh()
  }

  return config
})

instance.interceptors.response.use(
  (response) => {
    switch (response.config.url) {
      case url.accData:
        if (response.config.method === 'put')
          response.data = queryClient.getQueryData([queryKey.account])
        break
      case url.search:
        response.data = response.data.products
        break
      default:
    }

    if (response.config.url?.includes(url.categoryProducts))
      response.data = fakeFilter(response.config.params, response.data.products)

    return response.data
  },
  (error) => {
    console.log('THIS IS ERROR!!!!!!!!', error)
    throw new Response(error, {
      status: error.status,
    })
  },
)
