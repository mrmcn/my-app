import { ActionFunction } from 'react-router-dom'
import { instance } from '../../api'
import { url } from '../../api/url'
import { queryClient } from '../../query-client'
import { userCart } from '../../services'
import { queryKey } from '../../services/const'

export const checkoutPageAction = (async ({ request }) => {
  const formData = await request.formData()

  if (request.method === 'PUT') {
    await queryClient.fetchQuery({
      queryKey: [queryKey.account],
      queryFn: () => instance.put(url.accAction, formData),
    })
    return null
  }
  await queryClient.fetchQuery({
    queryKey: [queryKey.sendOrder, formData],
    queryFn: () => instance.post(url.sendOrder, formData),
  })
  userCart.removeCart()
  return null
}) satisfies ActionFunction
