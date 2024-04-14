import React from 'react';
import { useAuth } from '../../hook/'; // Make sure to provide the correct path

// Styled components
import {
  Container,
  UlList,
  LiList,
  UserProperWrapper,
  ImgProfileWrapper
} from './styles';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth() as any;

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      <UlList>
        <LiList>
          {user && (
            <UserProperWrapper>
              <div>
                <p>
                  <span>Welcome</span> {user?.name} 
                </p>
              </div>
              <ImgProfileWrapper>
                <img
                  src={user?.avatar} 
                  alt="profile"
                  width={65}
                  height={50}
                />
              </ImgProfileWrapper>
            </UserProperWrapper>
          )}
        </LiList>
      </UlList>
      <button onClick={handleLogout}>Logout</button>
    </Container>
  );
};

export default Navbar;
