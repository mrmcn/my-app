import { LoaderFunction, defer } from 'react-router-dom'
import { instance } from '../../api'
import { url as urlAPI } from '../../api/url'
import { queryClient } from '../../query-client'
import { queryKey } from '../../services/const'
import { Product } from '../../services/interface'

export const categoriesLoader = (({ request, params }) => {
  const url = new URL(request.url)

  return defer({
    response: queryClient.fetchQuery({
      queryKey: [
        queryKey.brands,
        Object.fromEntries(url.searchParams),
        params.category,
      ],
      queryFn: (): Promise<QueryFnProps> =>
        instance(urlAPI.categoryProducts, {
          params: { params: url.searchParams, category: params.category },
        }),
      staleTime: 60 * 60 * 1000,
    }),
  })
}) satisfies LoaderFunction

interface QueryFnProps {
  categoryProducts: Product[]
  allBrands: string[]
}
