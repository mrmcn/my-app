import { queryOptions } from '@tanstack/react-query'
import { LoaderFunction } from 'react-router-dom'
import { instance } from '../../api'
import { url as urlAPI } from '../../api/url'
import { queryClient } from '../../query-client'
import { userCart } from '../../services'
import { queryKey } from '../../services/const'
import { Product } from '../../services/interface'

export const layoutLoader = (async ({ request }) => {
  const url = new URL(request.url)
  const { search } = Object.fromEntries(url.searchParams)

  return {
    categories: await queryClient.fetchQuery(
      queryOptions({
        queryKey: [queryKey.categories],
        queryFn: (): Promise<string[]> => instance(urlAPI.categories),
        staleTime: Infinity,
        gcTime: 60 * 60 * 1000,
      }),
    ),
    cart: userCart.cart(),
    searchProduct: search
      ? await queryClient.fetchQuery({
          queryKey: [queryKey.search, url.searchParams],
          queryFn: (): Promise<Product[]> =>
            instance(urlAPI.search, { params: url.searchParams }),
        })
      : undefined,
  }
}) satisfies LoaderFunction
