import React, { createContext, useState, useContext, useEffect } from 'react';
import { userRegister, userLogin, logoutUser } from './userFetch';

interface IUser {
  name: string;
  email: string;
  password: string;
  _id: string;
  avatar: string;
}

interface IAuthContext {
    user?: any;
    isLogged: boolean;
    isRegister: boolean;
    register: (name: string, email: string, password: string) => void;
    login: (name: string, email: string, password: string) => void;
    logout: (id: string) => void;
}

const AuthContext = createContext<IAuthContext>({
  user: {},
  isLogged: false,
  isRegister: false,
  register: () => {},
  login: () => {},
  logout: () => {}
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [user, setUser] = useState<IUser | string | object>({});

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            setIsLogged(true);
        }

        const storagedUser = localStorage.getItem('user');
        if (storagedUser) {
            setUser(JSON.parse(storagedUser) as IUser);
        } else {
            setUser({});
        }
    }, []);
 

    const register = async (name: string, email: string, password: string) => {
      try {
        const data = await userRegister(name, email, password) as IUser;
        localStorage.setItem('userId', data._id);
        setIsRegister(true);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    const login = async (name: string, email: string, password: string) => {
    try {
      const data = await userLogin(name, email, password) as IUser;
      console.log(typeof data);
      localStorage.setItem('userId', data._id);
      setIsLogged(true);
      setUser(data) ;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (userId) {
        await logoutUser(userId); // Call the logoutUser function with the userID
        localStorage.removeItem('userId');
        localStorage.removeItem('user');
        setIsLogged(false);
        setUser({});
      }
    } catch (error) {
      console.log(error);
    }
  };


    console.log("isLogged", isLogged);

    return (
        <AuthContext.Provider value={{user, isLogged,  isRegister, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const UseAuth = () => useContext(AuthContext);