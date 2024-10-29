import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectHeader = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .proj-title {
      font-size: 2rem;
    }

    .proj-sub {
      font-size: 2rem;
      background-image: linear-gradient(to right, #0099ff, #55b1bf, #4e67a5);
      background-size: 40%;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    .desc {
      margin: 0 auto;
      width: 50%;
      font-size: 1.2rem;
      color: #747474;
    }
`;
