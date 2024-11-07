
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
    0% {
      border-color: #b3b3b3;
    }
    25% {
      border-color: #8d8d8d;
    }
    50% {
      border-color: #323232;
    }
    75% {
      border-color: #454545;
    }
    100% {
      border-color: #2d2d2d;
    }
`;

const moveUpDownHandIcon = keyframes`
    0%, 100% {
        transform: translateY(0) rotate(180deg);
    }
    50% {
        transform: translateY(-10%) rotate(180deg);
    }

`;

const leftToRightWidth = keyframes`
    from {
        width: 0;
        background-color: #0099ff;
    }
    to {
        width: 100%;
        background-color: #0099ff;
    }
`;

const cardTextFromLeftToRight = keyframes`
    from {
        transform: translateX(-50%);
    }
    to {
        transform: translateX(0%);
    }
`;

const slideOut = keyframes`
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
`;

const slideIn = keyframes`
      from {
      transform: translateX(-5%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
`;

export const Container = styled.div`
  margin: 12rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }

  .header-wrapper {
    margin: 0;
    position: relative;
    .header-text {
      font-size: 1.5rem;
      color: #b7b7b7;
    }
    h1 {
      font-size: 3rem;
      margin-right: 15rem;
    }
    span {
      font-size: 3rem;
      color: #0099ff;
      position: absolute;
      margin-left: 1rem;
    }

    .desc {
      color: #b7b7b7;
    }
  }

  .card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2.5rem;
    width: 70%;
    height: 30rem;

    .card {
      position: relative;
      width: 15rem;
      height: 15rem;
      background-color: #2a2a2a;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;

      transform: none !important;
      position: relative;
      cursor: pointer;

      .hand-icon {
        position: absolute;
        bottom: -2rem;
        right: 0;
        font-size: 4rem;
        color: #4ac3a7;
        z-index: 2;
        animation: ${moveUpDownHandIcon} 1s infinite;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
        border-radius: 0.4rem;
      }
      &:hover img {
        transform: scale(1.1);
      }

      .card-text {
        display: flex;
        flex-direction: column;
        opacity: 0;
        transition: opacity 0.5s ease;
        font-size: 1.5rem;
        text-align: center;
        color: #fff;
        position: absolute;
        z-index: 1;
      }

      .visible {
        opacity: 1;
        animation: ${cardTextFromLeftToRight} 0.8s forwards;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 0;
        opacity: 0.8;
        background-color: #e9a13b;
      }

      &:hover {
        &::after {
          animation: ${leftToRightWidth} 0.3s forwards;
        }
      }
    }
  }

  .box-wrapper {
    position: relative;

    .door-icon {
      position: absolute;
      top: 3rem;
      right: 2rem;
      font-size: 2rem;
      color: #2a2a2a;
      cursor: pointer;
    }

    .box-content {
      width: 60rem;
      height: 40rem;
      padding: 1rem;
      margin-top: 2rem;
      box-shadow: 2px 2px 2rem 0rem rgba(0, 0, 0, 0.5);
      border: 1px solid #323232;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      overflow-y: scroll;
      display: none;
      position: relative;

      &.active {
        display: block;
      }
    }
  }

  @media (max-width: 960px) {
    justify-content: center;
    align-items: center;

    .header-wrapper {
      width: 90%;

      .header-text {
        font-size: 1.2rem;
      }

      h1 {
        font-size: 1.8rem;
        white-space: nowrap;
        span {
          font-size: 1.6rem;
          margin-top: 0.28rem;
          margin-left: 0.5rem;
        }
      }
    }

    .card-wrapper {
      width: 100%;
      height: auto;
      margin: 0 auto;
      justify-content: center;
    }
  }
`;

export const LiveDemoContent = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .live-demo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #b7b7b7;
    }

    .card-content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 2rem;

      .card {
        width: 15rem;
        height: 15rem;
        background-color: #2a2a2a;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        position: relative;

        p:nth-child(1) {
          font-size: 1.2rem;
          color: #0099ff;
          font-weight: 500;
          padding-bottom: 0.1rem;
        }

        p:nth-child(2) {
          font-size: 0.8rem;
          color: #b7b7b7;
          font-weight: 200;
          width: 10rem;
          text-align: center;
        }

        img {
          width: 5rem;
          height: 5rem;
          object-fit: cover;
          margin-bottom: 1rem;
        }

        a {
          color: #0099ff;
          font-size: 1.5rem;
          text-decoration: none;
          margin-top: 1rem;
          transition: color 0.5s ease;

          &:hover {
            color: #4fa9e5;
          }
        }
      }
    }
  }

  .horizontal-line {
    width: 100%;
    height: 1px;
    background-color: #e9a13b;
    margin-top: 2rem;
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardSlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const CardSlideContent = styled.div`
  width: 85rem;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
`;

export const CardSlide = styled.div`
  width: 25rem;
  height: 25rem;
  margin: 2rem 0.8rem;
  border-radius: 1rem;
  cursor: pointer;
  background: linear-gradient(
    -60deg,
    rgba(25, 26, 29, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.8rem;
  }

  @media (max-width: 960px) {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 768px) {
    width: 18rem;
    height: 18rem;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 2rem;

  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    min-width: 100%;
  }
`;

export const MiniProjects = styled.div`
  width: 39rem;
  height: 13.125rem;
  border-radius: 1rem;
  cursor: pointer;
  background: linear-gradient(
    -60deg,
    rgba(25, 26, 29, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  max-width: 90%;

  @media (max-width: 960px) {
    width: 90vw;
    height: 20rem;
  }

  @media (max-width: 560px) {
    height: 25rem;
  }
`;

export const HeaderWrapper = styled.div`
  h2 {
    color: #0099ff;
    font-size: 1.5rem;
  }

  p {
    color: #767676;
  }
`;

export const MiniProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 960px) {
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
`;

export const MiniProjectsContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(8, 8, 8, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  margin: 1rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const ProjectUIUX = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39rem;
  height: 13.125rem;
  border-radius: 1rem;
  cursor: pointer;
  background: linear-gradient(
    -60deg,
    rgba(25, 26, 29, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  overflow: hidden;
  max-width: 90%;

  @media (max-width: 960px) {
    width: 90vw;
    height: 20rem;
  }
`;

export const ProjectUIUXHeader = styled.div`
  h2 {
    color: #0099ff;
    font-size: 1.5rem;
  }

  p {
    color: #767676;
  }
`;

export const ProjectUIUXWrapper = styled.div`
   width: 20rem;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
    gap: 1rem;
    margin-left: 0;
    position: relative;
`;

interface ProjectUIUXContentProps {
  isHovered? : boolean | number | null;
  isHovered2? : boolean | number | null;
  index : number;
}

export const ProjectUIUXContent = styled(motion.div)<ProjectUIUXContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(8, 8, 8, 0.8);
  padding: 1rem;
  position: absolute;
  top: -5rem;
  left: 0;
  margin-left: ${props => props.index * 5.5}rem;
  border: ${props => props.isHovered ? "1px solid #003a61" : "1px solid rgba(255, 255, 255, 0.1)"};

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const ProjectUIUXContent2 = styled(motion.div)<ProjectUIUXContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(8, 8, 8, 0.8);
  padding: 1rem;
  position: absolute;
  top: .4rem;
  left: 3rem;
  z-index: 1;
  margin-left: ${props => props.index * 5.5}rem;
  border: ${props => props.isHovered2 ? "1px solid #003a61" : "1px solid rgba(255, 255, 255, 0.1)"};

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 50rem;

  @media (max-width: 960px) {
    width: 90vw;
  }
`;

export const ProjectLinksContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  margin-top: 1rem;
  border-radius: .8rem;
  cursor: pointer;
  background: rgba(25, 25, 29, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: auto;

  .project-link-img {
    display: none;

    @media (max-width: 960px) {
      display: block;
      width: 3rem;
      height: 3rem;
      border-radius: 4%;
      object-fit: cover;
    }
  }

  @media (max-width: 960px) {
    justify-content: space-between;
    width: 90vw;
    margin-top: 0;
    mask-image: none;
  }
  h3 {
    color: #767676;
    font-size: 1rem;
    margin-left: .4rem;

    @media (max-width: 960px) {
      font-size: .9rem;
    }
  }

  .star-icon {
    color: #0099ff;
    font-size: 1.5rem;
  }
`;

export const CardTitle = styled.div`
    display: flex;

    @media (max-width: 960px) {
        align-items: center;
    }
`;