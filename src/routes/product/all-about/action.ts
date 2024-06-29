import { ActionFunction } from 'react-router-dom'
import { userCart } from '../../../services'

export const allAboutAction = (async ({ request }) => {
  const formData = await request.formData()
  return await userCart.addProduct(formData)
}) satisfies ActionFunction