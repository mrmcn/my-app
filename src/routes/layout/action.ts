import { ActionFunction } from 'react-router-dom'
import { userCart } from '../../services'

export const layoutAction = (async ({ request }) => {
  const formData = await request.formData()

  if (request.method === 'DELETE') {
    userCart.deleteProduct(formData)

    return null
  }
  userCart.editQuantity(formData)

  return null
}) satisfies ActionFunction
