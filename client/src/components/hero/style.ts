import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  overflow: hidden;

  .up-band {
    @media (max-width: 960px) {
      display: none;
    }
  }
  .black-col {
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background-color: #000;
    opacity: 0.9;
    z-index: 2;
    -webkit-mask-image: linear-gradient(to left, transparent, black 20%);
    mask-image: linear-gradient(to left, transparent, black 20%);

    @media (max-width: 960px) {
      display: none;
    }
  }

  .bottom-band {
    position: absolute;
    bottom: -5rem;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #000;
    opacity: 1;
    z-index: 2;
  }
  .fade-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 12rem; /* Ajusta el tamaño del difuminado */
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ); /* Ajusta el color del difuminado */
    pointer-events: none; /* Esto permite que los controles del video no sean bloqueados */
    z-index: 1;
  }

    @media (max-width: 960px) {
        width: 100%;
        margin: 0 auto;
        height: 50vh;
    }
`;

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
  position: relative;

  source {
    object-fit: cover;
  }

    @media (max-width: 960px) {
        height: 100%;
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
    transform: rotate(50deg);
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
  width: 75%;
  position: absolute;
  top: 6rem;
  left: 10rem;

  @media (max-width: 960px) {
    width: 90%;
    top: 8rem;
    left: 25%;
  }

  @media (max-width: 768px) {
    width: 90%;
    left: 17.5%;
    top: 6rem;
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
    margin-top: 2rem;

    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
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
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    width: 15rem;
    font-size: 0.5rem;
  }
`;
