import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const SimulateScreen = styled.div`
  width: 24rem;
  height: 16.5rem;
  border: 10px solid #e34a24;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: inset 0 0 2rem 1px rgba(0, 153, 255, 0.5);
  transition: transform 0.2s ease-in-out;
  pointer-events: none;
  z-index: 999;

   span {
      position: absolute;
      color: #0099ff;
      font-size: 1.5rem;
      font-weight: 700;
      left: 1rem;
      top: 1rem;
      text-transform: uppercase;
      transition: opacity 0.8s;
      z-index: 1;
    }

  .text {
      position: absolute;
      font-size: 1.5rem;
      font-weight: 700;
      left: 3rem;
      top: 1rem;
      text-transform: uppercase;
      transition: opacity 0.8s;
      z-index: 1;
    }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem 20px;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

  .icon {
    font-size: 3rem;
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    margin: 0 1rem;
  }

  &.active .icon {
    transform: scale(0.6);
    filter: brightness(1.5);
    z-index: -1;
  }
`;

export const LaptopIconWrapper = styled.div`
  .transparentScreen {
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
    width: 24rem;
    height: 16.5rem;
    border-radius: 1rem;
  }
  .laptopIcon {
    font-size: 30rem;
    color: #2a2a2a;
    opacity: 0.5;

    &:hover {
      fill: #2a2a2a;
    }
  }
`;
