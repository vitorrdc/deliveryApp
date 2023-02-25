import { AuthRoutes } from './auth.routes'
import { useContext } from 'react'
import AuthContext from '../Context/auth'
import { AppRoutes } from './app.routes'

export function Routes() {
  const { user } = useContext(AuthContext)

  return user.id ? <AppRoutes /> : <AuthRoutes />
}
