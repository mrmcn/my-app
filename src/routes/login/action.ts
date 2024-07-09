import { ActionFunction, redirect } from 'react-router-dom'
import { instance } from '../../api'
import { url } from '../../api/url'
import { queryClient } from '../../query-client'
import { auth } from '../../services'
import { queryKey } from '../../services/const'
import { Person } from '../../services/interface'

export const loginAction = (async ({ request }) => {
  const formData = await request.formData()
  const { redirectTo } = Object.fromEntries(formData) as { [k: string]: string }
  const response = await queryClient.fetchQuery({
    queryKey: [queryKey.login, formData],
    queryFn: (): Promise<Person> => instance.post(url.login, formData),
  })
  auth.setUserId(response.id)
  auth.setTokens({ token: response.token, refreshToken: response.refreshToken })

  return redirect(redirectTo || '/')
}) satisfies ActionFunction
