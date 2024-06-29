import { queryOptions } from '@tanstack/react-query'
import { ActionFunction, redirect } from 'react-router-dom'
import { instance } from '../../../api'
import { url } from '../../../api/url'
import { queryClient } from '../../../query-client'
import { auth } from '../../../services'
import { queryKey } from '../../../services/const'
import { ActionProps, Person } from '../../../services/interface'

export const personalDataAction = (async ({ request }: ActionProps) => {
  const formData = await request.formData()

  if (request.method === 'DELETE') {
    const response = await queryClient.fetchQuery({
      queryKey: [queryKey.delAccount],
      queryFn: (): Promise<{ isDeleted: true }> =>
        instance.delete(url.accAction),
    })
    auth.removeUserData()
    response.isDeleted && console.log('isDeleted')
    return redirect('/')
  } else {
    await queryClient.fetchQuery(
      queryOptions({
        queryKey: [queryKey.account],
        queryFn: (): Promise<Person> => instance.put(url.accAction, formData),
      }),
    )
    return null
  }
}) satisfies ActionFunction
