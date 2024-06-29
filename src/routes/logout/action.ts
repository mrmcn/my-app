import { redirect } from 'react-router-dom'
import { auth } from '../../services'

export const logoutAction = () => {
  auth.removeUserData()
  return redirect('/')
}
