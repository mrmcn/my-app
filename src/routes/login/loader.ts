import { LoaderFunction, redirect } from 'react-router-dom'
import { auth } from '../../services'

export const loginLoader = (({ request }) => {
  const check = auth.check(request)

  if (check === null) return redirect('/')
  return null
}) satisfies LoaderFunction
