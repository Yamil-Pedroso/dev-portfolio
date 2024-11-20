import { useEffect, useState } from "react";
import {
  Container,
  UserContent,
  Header,
  ContactTitle,
  ContentWrapper,
  Content,
  RightContent,
  LeftContent,
  FormWrapper,
  LeftSideForm,
  RightSideForm,
  Form,
  SocialNetWorkWrapper,
  HeaderWrapperMobile,
  InfoMobileWrapper,
  UserInfoWebWrapper,
} from "./styles";
import { contact } from "../../constants";
import ButtonTouch from "../button-touch/ButtonTouch";
import { mapa } from "../../assets";
import { motion } from "framer-motion";
import UserInfo from "./UserInfo";
import ContactForm from "./ContactForm";

const NewContact = () => {
  const [animateSubmitBtn, setAnimateSubmitBtn] = useState(false);
  const [textActive, setTextActive] = useState(true);
  const [changeWord, setChangeWord] = useState(0);
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const [socialIndex, setSocialIndex] = useState(0);

  const wordArray = ["touch", "contact", "sync", "connect"];

  const growIconBoxHandler = () => {
    setActiveIconIndex((prevIndex) =>
      prevIndex >= contact.length - 1 ? 0 : prevIndex + 1
    );
  };

  const jumpSocialNetworkHandler = () => {
    setSocialIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const changeWordHandler = () => {
    setTextActive(false);
    setTimeout(() => {
      setChangeWord((prevState) =>
        prevState < wordArray.length - 1 ? prevState + 1 : 0
      );
      setTextActive(true);
    }, 500);
  };

  const toggleContent = () => {
    setAnimateSubmitBtn((prevState) => !prevState);
  };

  return (
    <Container id="contact">
      <UserContent>
        <Header>
          <ContactTitle>
            <h2>
              Get in{" "}
              {wordArray.map((word, index) => (
                <motion.span
                  key={`${changeWord}-${index}`}
                  initial={{ opacity: 0, x: -100 }}
                  animate={textActive ? { opacity: 1, x: 0 } : {}}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ display: "inline-block" }}
                >
                  {wordArray[changeWord]}
                </motion.span>
              ))}
            </h2>
          </ContactTitle>
          <p>Feel free to reach out to me for any queries or project ideas.</p>

          <HeaderWrapperMobile>
            <ButtonTouch
              animateSubmitBtn={toggleContent}
              changeWord={changeWordHandler}
              growIconBox={growIconBoxHandler}
              jumpSocialNetwork={jumpSocialNetworkHandler}
            />

            <InfoMobileWrapper>
              <UserInfo
                activeIconIndex={activeIconIndex}
                socialIndex={socialIndex}
              />
            </InfoMobileWrapper>
          </HeaderWrapperMobile>
          <footer className="web-footer">
            <p>&copy; 2024 SoftwareDev&reg;. YP-NextGen Switzerland.</p>
          </footer>
        </Header>
        <UserInfoWebWrapper>
          <UserInfo
            activeIconIndex={activeIconIndex}
            socialIndex={socialIndex}
          />
        </UserInfoWebWrapper>
        <ContactForm animateSubmitBtn={animateSubmitBtn} />
      </UserContent>

      <footer className="mobile-footer">
        <p>&copy; 2024 SoftwareDev&reg;. YP-NextGen Switzerland.</p>
      </footer>
    </Container>
  );
};

export default NewContact;
