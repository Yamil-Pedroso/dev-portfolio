import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const pulseCircle = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  70% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
`;


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover .small-circle::after {
    animation: ${pulseCircle} 1.5s ease-out infinite; /* Activar la animación al hacer hover */
  }

  .small-circle {
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
    width: 1rem;
    height: 1rem;
    background-color: #0099ff;
    border-radius: 50%;
    z-index: 10;

    // Crear la onda de expansión utilizando un pseudo-elemento, pero sin animación por defecto
    &::after {
      content: '';
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      width: 2rem;
      height: 2rem;
      background-color: rgba(0, 153, 255, 0.5); /* Color azul transparente */
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(1);
      opacity: 0; /* Mantener invisible hasta que se haga hover */
    }
  }
`;

export const Card = styled(motion.div)`
  width: 30rem;
  background-color: #2b2d31;
  padding: 2rem;
  border-radius: 0.2rem;
  cursor: pointer;
  position: relative;

  h5 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #fefefe;
  }

  p {
    font-size: 0.85rem;
    font-weight: 400;
    text-align: justify;
    margin-bottom: 1rem;
    color: #999999;
  }

  img {
    width: 100%;
    height: 12.5rem;
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  .expanded-content {
    position: absolute;
    z-index: 1000;
    background-color: #000;
    border-radius: 0.2rem;
    border: 1px solid #fff;
  }

  @media (max-width: 960px) {
    width: 90%;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Btn = styled(motion.button)`
  font-size: 0.92rem;
  font-weight: 600;
  color: #fff;
  background-color: #2a2a2a;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
`;
