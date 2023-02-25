import { createContext, useState } from 'react'
import * as auth from '../services/auth'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('')
  const [user, setUser] = useState({ user: 'asdsa' })

  function signOut() {
    setUser({})
    setToken('')
  }

  async function signIn() {
    const response = await auth.signIn()
    setToken(response.token)
    setUser(response.user)

    console.log(response.user)
  }
  return (
    <AuthContext.Provider value={{ signIn, token, user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
