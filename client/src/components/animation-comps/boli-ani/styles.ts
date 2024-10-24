import styled from "styled-components";
import { motion } from "framer-motion";

export const BoliAniContainer = styled.div`
  margin-top: 6rem;

  @media (max-width: 960px) {
    margin-top: 3rem;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 960px) {
    width: 90%;
    margin: -1rem auto;
  }
`;

export const HeaderParagraphWrapper = styled.div`
  width: 50%;
  h2 {
    background-image: linear-gradient(to right, #0099ff, #55b1bf, #4e67a5);
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 20%;
    font-size: 1rem;
    font-weight: bold;
    color: transparent;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const HeaderParagraph = styled(motion.p)`
  color: #969696;
  font-size: 1.1rem;

  @media (max-width: 960px) {
    font-size: 1rem;
  }
`;

export const Stack = styled(motion.div)`
  margin-top: 3rem;
  position: relative;

  @media (max-width: 960px) {
    margin-top: 6rem;
    margin-right: 0;
  }

    @media (max-width: 768px) {
        margin-right: 0;
    }
`;

export const StackContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 600;
  width: 25rem;
  height: 10rem;
  background-image: linear-gradient(to right, #0099ff, #55b1bf);
  border-radius: 0.7rem;
  color: #000;
  position: relative;

  @media (max-width: 960px) {
    width: 20rem;
    height: 8rem;
    transition: all 0.5s ease;

    p {
      font-size: 2rem;
    }
  }
`;

export const ExtraContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 22rem;
  top: -2rem;

  @media (max-width: 960px) {
    left: 7.5rem;
  }
`;

export const SmallBoxHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  font-size: 1.2rem;
  width: 5rem;
  height: 4rem;
  background: rgba(25, 25, 29, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.7rem;
  color: #000;
  z-index: 1;

  span {
    font-size: 2rem;
  }

  @media (max-width: 960px) {
    margin-top: -.5rem;
    margin-left: -.5rem;
    width: 4rem;
    height: 3rem;

    span {
      font-size: 1.5rem;
    }
  }
`;

export const Spheare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  background: rgba(25, 25, 29, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 4rem;

  p {
    font-size: 1.2rem;
    color: #d4d4d4;
  }

  @media (max-width: 960px) {
    margin-top: 5rem;
    margin-left: -.5rem;
    width: 5.5rem;
    height: 5.5rem;

    p {
      font-size: 1rem;
    }
  }
`;

export const RightText = styled.div`
  p {
    font-size: 4rem;
    font-weight: 200;
    margin-left: 1rem;
  }

  @media (max-width: 960px) {
    transition: all 0.5s ease;
    p {
      margin-top: 1rem;
      font-size: 3rem;
    }
  }
`;
