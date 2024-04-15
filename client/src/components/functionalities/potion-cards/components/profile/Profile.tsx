import React, { useState, useEffect } from "react";
import { useAuth, usePotions } from "../../hook";
import { IPotion } from "../../providers/PotionProvider";
import {
  Container,
  ImgWrapper,
  IconWrapper,
  UserInfoWrapper,
  SmsWrapper,
  EditProfileWrapper,
  MyIconsProfileWrapper,
  UserIconProperties,
} from "./styles";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineLock,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsTelephoneForward } from "react-icons/bs";
const myIcons = [
  <AiOutlineUser size={32} />,
  <AiOutlineMail size={32} />,
  <AiOutlineCalendar size={32} />,
  <BiMap size={32} />,
  <BsTelephoneForward size={26} />,
  <AiOutlineLock size={32} />,
];

const Profile: React.FC = () => {
  const [userPotions, setUserPotions] = useState<IPotion[] | null>(null);
  const [activeIconIndex, setActiveIconIndex] = useState<number | null>(null);
  const { user } = useAuth() as any;
  const { loading, getUserPotions } = usePotions() as any;

  useEffect(() => {
    const fetchUserPotions = async () => {
      const result = await getUserPotions();
      if (result.success) {
        setUserPotions(result.data);
      } else {
        console.error("Failed to fetch user potions:", result.message);
      }
    };

    if (user) {
      fetchUserPotions();
    }
  }, [user]);

  const handleIconHover = (index: number) => {
    setActiveIconIndex(index);
  };

  const handleIconLeave = () => {
    setActiveIconIndex(null);
  };

  const userIconProperties: Record<string, string> = {
    user: "user.name",
    email: "user.email",
    calendar: "Calendar",
    map: "Address",
    telephone: "Phone",
    lock: "ooooooo",
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
      {user ? (
        <div>
          <ImgWrapper>
            <img src={user.avatar} alt="profile" />
          </ImgWrapper>
          <EditProfileWrapper>
            <p
              style={{
                textDecoration: "none",
                color: "#88419c",
                marginTop: "1rem",
                fontFamily: "Roboto, sans-serif",
                fontSize: ".9rem",
              }}
            >
              Edit
            </p>

            <p
              style={{
                textDecoration: "none",
                color: "#88419c",
                marginTop: "1rem",
                fontFamily: "Roboto, sans-serif",
                fontSize: ".9rem",
              }}
            >
              Change Password
            </p>
          </EditProfileWrapper>
          <UserInfoWrapper>
            {handleIcons() ? (
              <UserIconProperties>{handleIcons()}</UserIconProperties>
            ) : (
              <h2 style={{ position: "absolute", top: "5.7rem" }}>
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
      <div style={{
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        top: '15rem',
      }}>
        <h2>Your potions</h2>
        {userPotions && userPotions.length > 0 ? (
          <div>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            
            }}>
              {userPotions.map((potion, index) => (
                <div key={index}
                  style={{
                  
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'auto',
                    gap: '1rem',
                  }}
                >
                  <img src={potion.image} alt={potion.name} width={70} />
                  <p>{potion.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>{loading ? "Loading..." : "No potions found"}</div>
        )}
      </div>
    </Container>
  );
};

export default Profile;
