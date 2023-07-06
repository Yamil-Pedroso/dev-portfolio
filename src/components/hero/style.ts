import styled from 'styled-components';

export const HeroContainer = styled.div`
   position: relative;
   @media screen and (max-width: 960px) {
      
   }
`;

export const BoxWrapperOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 5px solid #2c8064;
    width: 30rem;
    height: 30rem;
    
    img.active {
      transform: rotate(50deg)
    }

    @media (max-width: 960px) {
        width: 20rem;
        height: 20rem;
        transition: 0.8s all ease;

        img {
            width: 10rem;
            height: 10rem;
        }
    }
`;

export const BoxWrapperTwo = styled.div`
    background-color: transparent;
    border: 5px solid #2c8064;
    width: 20rem;
    height: 20rem;
    top: 3rem;
    left: -12rem;
    position: absolute;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 25rem;
  margin-top: 12rem;
  width: 75%;

  > div {
    padding: 0 1rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-top: 9rem;
        margin-bottom: 10rem;
    }
`;

export const BlurStyle = styled.div`
  width: 20vw;
  height: 30vh;
  background: #2c8064;
  position: absolute;
  z-index: 0;
  top: -7rem;
  right: -2rem;
  filter: blur(7rem);
`;

export const HeroRightContent = styled.div`
    @media (max-width: 1580px) {
        h1 {
            font-size: 3.5rem;
        }
    }
    @media (max-width: 960px) {
        width: 100%;
        margin-top: 2rem;

        h1 {
            font-size: 3rem;
        }
    }
        
`;

export const TitleDev = styled.h2`
  background-image: linear-gradient(to right, #46ca9e, #55b1bf, #4e67a5);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 5rem;

    @media (max-width: 1580px) {
        font-size: 4rem;
    }

    @media (max-width: 960px) {
        font-size: 3rem;
    }
`;

export const CityName = styled.p`
  font-size: 5rem;
  color: #fafafa;

    @media (max-width: 1580px) {
        font-size: 4rem;
    }

    @media (max-width: 960px) {
        font-size: 3rem;
    }
`;

export const TerminalSim = styled.div`
  display: flex;
  background: #1c1c1e;
  border: 1px solid #2a2a2a;
  border-radius: 0.5rem;
  width: 28rem;
  
  p {
    padding: 0 0.5rem;
  }

  p:nth-child(1) {
    color: #46ca9e;
  }

  p:nth-child(2) {
    color: #a4a3a3;
  }

  p:nth-child(3) {
    color: #2c8064;
  }
`;


