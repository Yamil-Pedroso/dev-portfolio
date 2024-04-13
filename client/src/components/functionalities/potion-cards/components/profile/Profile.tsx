import React, { useState } from 'react';
import { UseAuth } from '../../hook/AuthContext';
import { Link } from 'react-router-dom';
import { Container, ImgWrapper, IconWrapper, UserInfoWrapper, SmsWrapper, EditProfileWrapper, MyIconsProfileWrapper, UserIconProperties } from './styles';
import { AiOutlineUser, AiOutlineMail, AiOutlineCalendar, AiOutlineLock } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsTelephoneForward } from 'react-icons/bs';

const myIcons = [
  <AiOutlineUser size={32} />,
  <AiOutlineMail size={32} />,
  <AiOutlineCalendar size={32} />,
  <BiMap size={32} />,
  <BsTelephoneForward size={26} />,
  <AiOutlineLock size={32} />
];

const Profile: React.FC = () => {
  const [activeIconIndex, setActiveIconIndex] = useState<number | null>(null);
  const { isLogged, user } = UseAuth();

  const handleIconHover = (index: number) => {
    setActiveIconIndex(index);
  };

  const handleIconLeave = () => {
    setActiveIconIndex(null);
  };

  const userIconProperties: Record<string, string> = {
    user: user.name,
    email: user.email,
    calendar: "Calendar",
    map: "Address",
    telephone: "Phone",
    lock: "ooooooo"
  };

  const handleIcons = () => {
    if (activeIconIndex !== null) {
      const iconKey = Object.keys(userIconProperties)[activeIconIndex];
      return userIconProperties[iconKey];
    }
    return null;
  };

  return (
    <Container>
      {isLogged ? (
        <div>
          <ImgWrapper>
            <img src={user.avatar} alt="profile" />
          </ImgWrapper>
          <EditProfileWrapper>
            <Link
              to="/me/update"
              style={{ textDecoration: 'none', color: '#88419c', marginTop: '1rem', fontFamily: 'Roboto, sans-serif', fontSize: '.9rem' }}
            >Edit</Link>

            <Link to="/update-password" style={{ textDecoration: 'none', color: '#88419c', marginTop: '1rem', fontFamily: 'Roboto, sans-serif', fontSize: '.9rem' }}>
              Change Password 
            </Link>
          </EditProfileWrapper>
          <UserInfoWrapper>
            {
              handleIcons() ? (
                <UserIconProperties>
                  {handleIcons()}
                </UserIconProperties>
              ) : (
                <h2 style={{ position: "absolute", top: "5.7rem"}}>
                  {user.name}
                </h2>
              )}
          </UserInfoWrapper>

          <IconWrapper>
            {myIcons.map((icon, index) => (
              <MyIconsProfileWrapper 
                key={index}
                onMouseEnter={() => handleIconHover(index)}
                onMouseLeave={handleIconLeave}
              >
                {icon}
              </MyIconsProfileWrapper>
            ))}
          </IconWrapper>
        </div>
      ) : (
        <SmsWrapper>
          <h2>You are not logged in!</h2>
        </SmsWrapper>
      )}
    </Container>
  );
};

export default Profile;
