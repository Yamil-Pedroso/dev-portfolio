import React, { useState, useEffect } from "react";
import { useAuth, usePotions } from "../../hook";
import { Toaster, toast } from 'sonner'
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
import { MdClose } from "react-icons/md";
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
  const { loading, getUserPotions, deletePotion } = usePotions() as any;

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

  const handleDeletePotion = async (_id: string) => {
    const result = await deletePotion(_id);
    if (result.success) {
      const updatedPotions = userPotions?.filter((potion) => potion._id !== _id);
      setUserPotions(updatedPotions || []);

      toast.success("Potion deleted successfully");
    } else {
      console.error("Failed to delete potion:", result.message);
    }
  }

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
        <>
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
          <h2
            style={{
              color: "#fff",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.2rem",
              marginTop: "16rem",
              position: "absolute",
            }}
          >Your potions</h2>
        </>
      ) : (
        <SmsWrapper>
          <h2>You are not logged in!</h2>
        </SmsWrapper>
      )}
      <div style={{
        position: 'absolute',
        justifyContent: 'center',
        top: '16.5rem',
        height: 'auto',
      }}>
        {userPotions && userPotions.length > 0 && (
          <div>
              
            <div style={{
              width: '80rem',
              display: 'flex',
              gap: '3rem',
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
                  <img src={potion.image} alt={potion.name} width={50} />
                  <p
                   style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '.8rem',
                    color: '#e1e1e1',
                    textAlign: 'center',
                    }}
                  >{potion.name}</p>
                  <MdClose
                    onClick={() => handleDeletePotion(potion._id as string)}
                    style={{
                      color: '#9c4141',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )
        }
      </div>
      <Toaster
        position="bottom-center"
      />
    </Container>
  );
};

export default Profile;
