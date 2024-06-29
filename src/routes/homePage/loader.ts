import { LoaderFunction, defer } from 'react-router-dom'
import { instance } from '../../api'
import { products } from '../../api/fake'
import { url } from '../../api/url'
import { queryClient } from '../../query-client'
import { queryKey } from '../../services/const'

export const homePageLoader = (() => {
  return defer({
    categories: queryClient.fetchQuery({
      queryKey: [queryKey.categories],
      queryFn: (): Promise<string[]> => instance(url.categories),
      staleTime: Infinity,
    }),
    banners: queryClient.fetchQuery({
      queryKey: [queryKey.banners],
      queryFn: () => products.banners,
      staleTime: Infinity,
    }),
  })
}) satisfies LoaderFunction
