import { useEffect, useState } from "react";
import Navbar from "./components/header/Navbar";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import { IAuthContext } from "./providers/UserProvider";

import { UserProvider } from "./providers/UserProvider";
import { PotionProvider } from "./providers/PotionProvider";

import {
  Container,
  HeaderContentWrapper,
  CardWrapper,
  CardHeader,
  Card,
  MenuItemWrapper,
  Button,
  HeaderTitle,
} from "./styles";
import { useAuth } from "./hook";


const PotionCardMain = () => {
  const { user, logout } = useAuth() as any;
  const [ logoutItemVisible, setLogoutItemVisible ] = useState(false);
  console.log("User logged", user);

  const handleLogout = () => {
    logout();               
    console.log('You are successfully logged out!');
  };

  const myMenuObj = [
    {
      id: 1,
      name: "Home",
      component: <HomePage />,
    },
    {
      id: 2,
      name: "Profile",
      component: <ProfilePage />,
    },
    {
      id:3,
      name: "Login",
      component: <LoginPage />,
    },
    {
      id: 4,
      name: "Register",
      component: <RegisterPage />,
    },
    {
      id: 5,
      name: "Update Password",
      component: <UpdatePasswordPage />,
    },
    {
      id: 6,
      name: "Update Profile",
      component: <UpdateProfilePage />,
    }
  ];
  
  const [activeComponent, setActiveComponent] = useState(
    myMenuObj[0].component
  );
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
      setIsVisible(true);
  } , []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleActiveComponent = (component: any, item: any) => {
    setIsVisible(false);
    setSelectedItem(item);
    setTimeout(() => {
      setActiveComponent(component as never);
      setIsVisible(true);
    }, 400);
  };

  
    const filteredMenu = myMenuObj.filter(item => {
      if (user) {
        return item.name !== "Login" && item.name !== "Register";
      } else {
        return item.name
      }
    });

  return (
      <PotionProvider>
        <CardWrapper>
          <Card>
            <Navbar />
            <MenuItemWrapper>
              {filteredMenu.map((item) => {
                return (
                  <div
                    onClick={() =>
                      handleActiveComponent(item.component, item.name)
                    }
                    key={item.id}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: `translateY(${isVisible ? 0 : -10}px)`,
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      color: selectedItem === item.name ? "#7b42dd" : "#fff",
                    }}
                  >
                    <p
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      {
                        item.name 
                      }
                    </p>
                  </div>
                );
              })}
              { user && (
          
            <Button
              
              style={{
               

              }}
            onClick={handleLogout}>
              
              "Logout"
              
            </Button>
            )}
            </MenuItemWrapper>
            <div
             className={isVisible ? "visible" : "hidden"}>
              {activeComponent}
            </div>
          </Card>
        </CardWrapper>
      </PotionProvider>
  );
};

const App = () => {
  return (
    <UserProvider>
      <PotionCardMain />
    </UserProvider>
  );
};

export default App;
