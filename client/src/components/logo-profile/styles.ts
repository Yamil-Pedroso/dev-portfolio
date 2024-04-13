import styled from 'styled-components';

export const Container = styled.div`
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 5.5rem;
    left: 2rem;
    opacity: 0;
    visibility: hidden;

    @media (max-width: 1060px) {
        opacity: 1;
        visibility: visible;
        position: fixed;
        z-index: 999;
    }
`;
