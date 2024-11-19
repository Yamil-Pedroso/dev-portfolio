import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 82.5rem;
  height: auto;
  margin: 0 auto;
  display: flex;
  border: 1px solid #232323;
  border-radius: 5px;
  padding: 1rem;

  .mobile-footer {
    display: none;
    @media (max-width: 1200px) {
      display: block;
      margin-top: 15rem;
      p {
        color: #767676;
      }
    }

    @media (max-width: 768px) {
      margin-top: 12rem;

      p {
        font-size: 0.8rem;
        text-align: center;
      }
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const UserContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin: 0 auto;
  gap: 8rem;

  @media (max-width: 1200px) {
    width: 90vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  position: relative;
  div {
    color: #fff;
    font-size: 3rem;

    span {
      color: #0099ff;
      position: absolute;
      margin-left: 0.5rem;
    }
  }

  p {
    color: #767676;
  }

  .web-footer {
    margin-top: 1.6rem;
    p {
      color: #767676;
    }
  }

  @media (max-width: 1200px) {
    margin-top: -3rem;
    .web-footer {
      display: none;
    }
  }
`;

export const HeaderWrapperMobile = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    gap: 5rem;
  }
`;

export const InfoMobileWrapper = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    
    width: 0%;
  }
`;

export const UserInfoWebWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ContactTitle = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: 1200px) {
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;

  @media (max-width: 768px) {
    margin-left: 1.4rem;
  }
  .icon-box {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #303030;
    border-radius: 5px;

    @media (max-width: 960px) {
      padding: 0.8rem;
    }

    @media (max-width: 768px) {
      padding: 0.5rem;
    }
    img {
      width: 2rem;
      height: 2rem;
    }

    .icon {
      width: 2rem;
      height: 2rem;
      fill: #c8bdb0;
      transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;

      @media (max-width: 768px) {
        width: 1.5rem;
      }
    }
  }

  .bigIconBox {
    transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;

    @media (max-width: 768px) {
      transform: scale(.8);
    }

    @media (max-width: 768px) {
      transform: scale(.6);
    }

    .icon {
      width: 2.5rem;
      height: 2.5rem;
      transform: scale(1.2);
      fill: #0099ff;
    }
  }

  .cont-wrapper {
    @media (max-width: 1200px) {
      p {
        font-size: 1rem;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mobile-cont {
    display: none;

    @media (max-width: 768px) {
      display: block;
      font-size: 0.9rem;
      position: absolute;
      top: -6rem;
      left: -10rem;
      padding: 1rem;
      border-radius: 5px;
      background-color: #212121;
      z-index: 1;
      transition: 0.5s ease;

      p {
        color: #fff;
      }
    }
  }
`;

export const SocialNetWorkWrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;
  margin-top: auto;
  svg {
    height: 5rem;
    width: 5rem;
    margin: 1rem;
    padding: 0;
    fill: #c8bdb0;
    transition: fill 0.2s;
    cursor: pointer;

    &:hover {
      fill: #0099ff;
    }

    @media (max-width: 768px) {
      height: 3rem;
      width: 3rem;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftContent = styled.div``;

export const FormWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 18rem;
  height: auto;
  gap: 1rem;
  border-radius: 0.5rem;
  position: relative;

  img {
    position: absolute;
    filter: grayscale(70%);
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;

    @media (max-width: 1200px) {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1200px) {
    margin-top: 5rem;
  }
`;

export const RightSideForm = styled.div``;

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  padding: 1.9rem;
  gap: 0.6rem;
  position: absolute;
  background-color: #161616;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }
  label {
    color: #767676;
    font-size: 0.9rem;
    margin-bottom: 0.2rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  input {
    padding: 0.2rem;
    background-color: #000000;
    color: #767676;
    outline: none;

    @media (max-width: 768px) {
      padding: 0.1rem;
    }
  }

  textarea {
    padding: 1rem;
    background-color: #000000;
    color: #767676;
    outline: none;

    @media (max-width: 768px) {
      padding: 0.5rem;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 7rem;
    padding: 0.4rem;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    background-color: #000000;
    color: white;
    box-shadow: 2px 2px 2rem 0rem rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
    border-radius: 5rem;
    cursor: pointer;
    animation: borderAnimation 8s linear infinite;

    @media (max-width: 768px) {
      width: 6rem;
      padding: 0.2rem;
      font-size: 0.8rem;
    }

    @keyframes borderAnimation {
      0% {
        border-color: #006699; /* Azul oscuro */
      }
      25% {
        border-color: #004d73; /* Azul más profundo */
      }
      50% {
        border-color: #00334d; /* Azul casi negro */
      }
      75% {
        border-color: #004d73; /* Azul más profundo */
      }
      100% {
        border-color: #006699; /* Azul oscuro */
      }
    }
  }

  @media (max-width: 768px) {
     padding: 0.3rem;
  }
`;

export const LeftSideForm = styled.div`
  width: 50%;
`;
