import { createContext } from 'react'
import { useProvideAuth } from '../hook'

const initialState = {
  user: null,
  getAllUsers: () => {},
  register: () => {},
  updateUser: () => {},
  login: () => {},
  googleLogin: () => {},
  logout: () => {},
  loading: true,
}

export const UserContext = createContext(initialState) as any

export const UserProvider = ({ children }: any) => {
  const auth = useProvideAuth()

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>
}
