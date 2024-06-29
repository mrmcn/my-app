import { LoaderFunction, defer } from 'react-router-dom'
import { instance } from '../../api'
import { url as urlAPI } from '../../api/url'
import { queryClient } from '../../query-client'
import { queryKey } from '../../services/const'
import { Product } from '../../services/interface'

export const searchResultsLoader = (({ request }) => {
  const url = new URL(request.url)

  return defer({
    categoryProducts: queryClient.fetchQuery({
      queryKey: [queryKey.search, url.searchParams],
      queryFn: (): Promise<Product[]> =>
        instance(urlAPI.search, { params: url.searchParams }),
    }),
  })
}) satisfies LoaderFunction
