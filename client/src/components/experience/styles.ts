import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    transform: translateX(-100%) scaleX(0);
    transform-origin: 0% 50%;
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    transform: translateX(0) scaleX(1);
    transform-origin: 100% 50%;
    opacity: 0;
  }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;

    div {
        margin: .7rem;
    }

    @media (max-width: 1400px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const LeftSide = styled.div`
  width: 25rem;
  height: 45rem;
  background:#101010;
  box-shadow: 0px 0px 80px 1rem rgba(24, 35, 29, 0.1);
  border-radius: 1.2rem;
  padding: 1rem;
  border: 1px solid #2a2b2a;
  position: relative;

    h2 {
        color: #fff;
        font-size: 1.3rem;
        margin: 1rem;
        letter-spacing: -.01rem;
        font-weight: bold;
    }

    p {
        color: #6C6C6C;
        font-size: .8rem;
        margin: 1rem;
        letter-spacing: -.01rem;

    }

    @media (max-width: 1024px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 20rem;
        margin-bottom: 1rem;
        transition: all .2s ease-in-out;

        .card-animation-wrapper {
            position: absolute;
            top: 23rem;
            left: -1.5rem;
        }

    }
`;

export const RightSide = styled.div`
    width: 55rem;
    height: 45rem;
    background-color: #101010;
    border-radius: 1.2rem;
    box-shadow: 0px 0px 80px 1rem rgba(24, 35, 29, 0.1);
    padding: 1rem;
    border: 1px solid #2a2b2a;
    position: relative;

    h2 {
        color: #fff;
        font-size: 1.3rem;
        margin: 1rem;
        letter-spacing: -.01rem;
        font-weight: bold;
    }

    p {
        color: #6C6C6C;
        font-size: .8rem;
        margin: 1rem;
        letter-spacing: -.01rem;

    }

    @media (max-width: 1024px) {
      width: 40rem;
      height: 40rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      width: 27rem;
      height: 44rem;
    }

`;

export const ExperienceContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    div {
      margin: .7rem;
    }
  `;

export const ExperienceWrapper = styled.div`
    width: 15rem;
    display: flex;
    flex-direction: column;
    background: #070707;
    border-radius: .6rem;
    border : 1px solid #1f3328;
    box-shadow: 0px 0px 80px 1rem rgba(12, 17, 15, 0.1);
    cursor: pointer;
    transition: all .2s ease-in-out;
    position: relative;
    
    &:hover {
      color: #fff;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(30, 144, 255, 0.1) 0%, #1e90ff 50%, #87ceeb 100%);
        transform-origin: 0 50%;
        transform: translateX(100%) scaleX(0);
        opacity: 0;
        animation: ${waveAnimation} 0.5s forwards;
        z-index: 999;
        pointer-events: none;
      }
    }
    
    @media (max-width: 1024px) {
      width: 10rem;
      justify-content: center;
    }

    @media (max-width: 768px) {
      height: 3rem;
      width: 10rem;
    }
  `;

export const Experience = styled.div`
  color: #C6C6C6;
  
  h4 {
    font-size: .7rem;
    margin: 1rem;
    letter-spacing: -.01rem;
  }
  
  p {
    font-size: .8rem;
    margin: 1rem;
    letter-spacing: -.01rem;
    
  }
  @media (max-width: 768px) {
      width:100%;
  }

`;
