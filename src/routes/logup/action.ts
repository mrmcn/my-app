import { ActionFunction } from 'react-router-dom'
import { instance } from '../../api'
import { url } from '../../api/url'
import { queryClient } from '../../query-client'
import { queryKey } from '../../services/const'
import { Person } from '../../services/interface'

export const logUpAction = (async ({ request }) => {
  const formData = await request.formData()
  const newAccount = await queryClient.fetchQuery({
    queryKey: [queryKey.logUp, formData],
    queryFn: (): Promise<Person> => instance.post(url.accAdd, formData),
  })
  console.log('newAccount', newAccount)

  return newAccount
}) satisfies ActionFunction
