import { LoaderFunction, defer, redirect } from 'react-router-dom'
import { instance } from '../../api'
import { url } from '../../api/url'
import { queryClient } from '../../query-client'
import { auth, userCart } from '../../services'
import { queryKey } from '../../services/const'
import { Person } from '../../services/interface'

export const checkoutPageLoader = (({ request }) => {
  const check = auth.check(request)
  if (check !== null) {
    return redirect('/login?' + check)
  }

  return defer({
    data: queryClient.fetchQuery({
      queryKey: [queryKey.personalData],
      queryFn: (): Promise<Person> => instance(url.accData),
    }),
    cart: userCart.cart(),
  })
}) satisfies LoaderFunction
