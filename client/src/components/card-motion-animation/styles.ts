import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .small-circle {
        position: absolute;
        top: -.5rem;
        left: -.5rem;
        width: 1rem;
        height: 1rem;
        background-color: #0099ff;
        border-radius: 50%;
        z-index: 10;
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
