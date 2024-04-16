import { createContext } from 'react'
import { useProvideAuth } from '../hook'


interface IUser {
  name: string;
  email: string;
  password: string;
  _id: string;
  avatar: string;
}

export interface IAuthContext {
  user?: any;
  isLogged: boolean;
  isRegister: boolean;
  register: (name: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const initialState = {
  user: null,
  isLogged: false,
  isRegister: false,
  register: () => {},
  login: () => {},
  logout: () => {}
}


export const UserContext = createContext(initialState) as any

export const UserProvider = ({ children }: any) => {
  const auth = useProvideAuth()

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>
}
