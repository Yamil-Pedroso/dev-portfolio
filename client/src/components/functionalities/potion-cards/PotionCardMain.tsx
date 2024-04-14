import { useEffect, useState } from 'react'
import Navbar from './components/header/Navbar'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import UpdatePasswordPage from './pages/UpdatePasswordPage'
import UpdateProfilePage from './pages/UpdateProfilePage'

import { UserProvider } from './providers/UserProvider'

import { Container,HeaderContentWrapper, CardWrapper, CardHeader, Card, MenuItemWrapper, HeaderTitle } from './styles'
import { useAuth } from './hook'

const myMenuObj = [
    {
      id: 1,
      name: 'Home',
      component: <HomePage />
    },
    {
      id: 2,
      name: 'Profile',
      component: <ProfilePage />
    },
    {
      id: 3,
      name: 'Login',
      component: <LoginPage />
    },
    {
      id: 4,
      name: 'Register',
    component: <RegisterPage />
    },
    {
      id: 5,
      name: 'Forgot Password',
      component: <ForgotPasswordPage />
    },
    {
      id: 6,
      name: 'Update Password',
      component: <UpdatePasswordPage />
    },
    {
      id: 7,
      name: 'Update Profile',
      component: <UpdateProfilePage />
    }
  ]
  
  
const PotionCardMain = () => {
    const [activeComponent, setActiveComponent] = useState(myMenuObj[0].component)
    const [isVisible, setIsVisible] = useState(true); 
    const [isShrunk, setIsShrunk] = useState(false);
    const [isSmallSize, setIsSmallSize] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { user, logout } = useAuth() as any;
  
    const handleLogout = () => {
      logout();
      setIsVisible(false);
      setSelectedItem(null);
      setTimeout(() => {
        setActiveComponent(myMenuObj[0].component);
        setIsVisible(true);
      }, 400);
    }
  
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const handleActiveComponent = (component: any, item: any) => {
      setIsVisible(false); 
      setSelectedItem(item as never);
      setTimeout(() => {
      setActiveComponent(component as never);
      setIsVisible(true); 
      }, 400); 
    }
  
    //useEffect(() => {
    //  if(isLogged) {
    //    setActiveComponent(<HomePage />);
    //  }
    //}, [isLogged])
  
    const colorStyle = {
      color: '#7b42dd'
    }
  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
  
      const shouldShrinkHeader = currentScrollPos > 100;
      setIsShrunk(shouldShrinkHeader);
  
      const shouldSmallHeader = currentScrollPos > 100;
      setIsSmallSize(shouldSmallHeader);
  
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <UserProvider>
           <CardWrapper>
            <Card>
                <Navbar />
                <MenuItemWrapper>
                  {
                    myMenuObj.map((item) => {
                      return (
                          <div
                            onClick={() => item.name === 'Login' ? handleLogout() : handleActiveComponent(item.component, item)}
                            key={item.id}
                            style={{ 
                              opacity: isVisible ? 1 : 0, 
                              transform: `translateY(${isVisible ? 0 : -10}px)`, 
                              transition: 'opacity 0.3s ease, transform 0.3s ease', 
                              color: selectedItem === item ? colorStyle.color : '#fff'
                            }}
                            >
                              
                              <p
                  
                              >
                                {item.name}
                              </p>
                               
                          </div>
                      )
                    })
                  }
                  </MenuItemWrapper>
                  <div className={isVisible ? 'visible' : 'hidden'}>
                   {
                    activeComponent
                   }
                  </div>
            </Card>
        </CardWrapper>
    </UserProvider>
  )
}

export default PotionCardMain