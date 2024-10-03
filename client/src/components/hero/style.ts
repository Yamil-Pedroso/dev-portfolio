import styled from 'styled-components';

export const HeroContainer = styled.div`
   .black-col {
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    z-index: 2;

    -webkit-mask-image: linear-gradient(to left, transparent, black 20%);
    mask-image: linear-gradient(to left, transparent, black 20%);
    }

    .bottom-band {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 12rem;
        background-color: #000;
        opacity: 1;
        z-index: 2;
    }
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1; 
  filter: brightness(0.6);

  source {
    // Dame un blur para el video
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
    
    @media (max-width: 768px) {
        width: 15rem;
        height: 15rem;
        align-items: center;
        transition: 0.8s all ease;
       
        
        img {
            width: 8rem;
            height: 8rem;
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
  margin-bottom: 10rem;
  margin-top: 12rem;
  width: 75%;

  > div {
    padding: 0 1rem;
    }

    @media (max-width: 960px) {
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 9rem;
        margin-bottom: 4rem;
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
   z-index: 2;
   margin-top: 10rem;
   margin-right: 30rem;
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
        
    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.7rem;
        }
    }

    .hero-content-wrapper {
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const TitleDev = styled.h2`
  background-image: linear-gradient(to right, #0099ff, #55b1bf, #4e67a5);
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

    @media (max-width: 768px) {
        font-size: 2.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
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

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
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
    color: #0099ff;
  }

  p:nth-child(2) {
    color: #a4a3a3;
  }

  p:nth-child(3) {
    color: #0099ff;
  }

    @media (max-width: 960px) {
        width: 25rem;
        font-size: .9rem;
    }

    @media (max-width: 768px) {
        width: 15rem;
        font-size: 0.5rem;
    }
`;


