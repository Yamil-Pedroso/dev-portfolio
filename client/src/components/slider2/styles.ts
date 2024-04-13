import styled, {keyframes} from 'styled-components';

export const IconTech = styled.div`
`;

// keyframes
const jumping = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-1rem);
    }
    100% {
        transform: translateY(0);
    }
`;

export const ToolTip = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 20rem;
    height: 12rem;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    cursor: pointer;
    z-index: 100;
    transition: all 0.3s ease-in-out;
    &:hover {
        opacity: 1;
    }
    
    p {
        color: #e9a13b;
        font-size: 1.2rem;
        text-align: center;
        text-align: left;

        @media (max-width: 1024px) {
            font-size: 1rem;
        }

        @media (max-width: 768px) {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 1024px) {
        width: 15rem;
        height: 9rem;
        padding: 1rem;
        overflow-y: hidden;
    }

    @media (max-width: 768px) {
        width: 10rem;
        height: 6rem;
        padding: 0.1rem;
        overflow-y: hidden;
    }
`;

export const ToolTipTextWrapper = styled.div`
     width: 15rem;
     overflow-y: hidden;
     height: 10rem;
     transition: all 0.3s ease-in-out;

     &:hover {
        opacity: 1;
        overflow-y: auto;
    }
    

    &::-webkit-scrollbar {
      width: 0.5rem;

      @media (max-width: 1024px) {
        width: 0.3rem;
      }

        @media (max-width: 768px) {
            width: 0.2rem;
        }
       
    }
    
    &::-webkit-scrollbar {
        width: 0.5rem;

        @media (max-width: 1024px) {
            width: 0.3rem;
        }

        @media (max-width: 768px) {
            width: 0.2rem;
        }
    }
    &::-webkit-scrollbar-track {
        background: #1b1b1b;
    }
    &::-webkit-scrollbar-thumb {
        background: #e9a13b;
    }

`;




