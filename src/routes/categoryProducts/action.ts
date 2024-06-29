import { ActionFunction } from 'react-router-dom'
import { userCart } from '../../services'

export const categoryAction = (async ({ request }) => {
  const formData = await request.formData()
  return userCart.addProduct(formData)
}) satisfies ActionFunction
