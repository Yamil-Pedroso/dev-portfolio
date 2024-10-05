
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BoliAniContainer = styled.div`
    margin-top: 5rem;
    `;

export const HeaderParagraph = styled(motion.p)`
    max-width: 50rem;
    color: #969696;
    font-size: 1.1rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const RightText = styled.div`
    p {
       font-size: 4rem;
       font-weight: 200;
       margin-left: 1rem;
    }
`;

export const HeaderParagraphWrapper = styled.div`
    h2 {
        background-image: linear-gradient(to right, #0099ff, #55b1bf, #4e67a5);
        background-clip: text;
        -webkit-background-clip: text;
        background-size: 20%;
        font-size: 1rem;
        font-weight: bold;
        color: transparent;
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
    border-radius: .7rem;
    color: #000;
`;

export const Stack = styled(motion.div)`
   margin-top: 3rem;
   position: relative;
`;

export const StackContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const ExtraContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 22rem;
    top: -2rem;
`;

export const Spheare = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 50%;
    background: rgba(25, 25, 29, 0.9); /* Un color de fondo semitransparente */
    backdrop-filter: blur(10px); /* Ajusta la cantidad de blur según prefieras */
    -webkit-backdrop-filter: blur(10px); /* Compatibilidad con Safari */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para dar un poco de profundidad */
    margin-top: 4rem;

    p {
        font-size: 1.2rem;
        color: #d4d4d4;
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
    background: rgba(25, 25, 29, 0.9); /* Un color de fondo semitransparente */
    backdrop-filter: blur(10px); /* Ajusta la cantidad de blur según prefieras */
    -webkit-backdrop-filter: blur(10px); /* Compatibilidad con Safari */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para dar un poco de profundidad */
    border-radius: .7rem;
    color: #000;
    z-index: 999;

    span {
        font-size: 2rem;
    }
`;