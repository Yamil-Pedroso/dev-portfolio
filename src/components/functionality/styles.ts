import styled, { keyframes } from 'styled-components';


const leftToRightWidth = keyframes`
    from {
        width: 0;
        background-color: #e9a13b; // Color de la animación
    }
    to {
        width: 100%;
        background-color: #e9a13b;
    }
`;

const cardTextFromLeftToRight = keyframes`
    from {
        transform: translateX(-50%);
    }
    to {
        transform: translateX(0%);
    }
`;

const slideOut = keyframes`
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
`;

const slideIn = keyframes`
      from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
`;


export const Container = styled.div`
    margin: 12rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .header-wrapper {
        margin: 0;
        position: relative;
        h1 {
            font-size: 3rem;
            margin-right: 15rem;
        }
        span {
            font-size: 3rem;
            color: #45c347;
            position: absolute;
            margin-left: 1rem;
        }
    }
    .card-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2rem;
        width: 60%;


        .card {
            position: relative;
            width: 15rem;
            height: 15rem;
            background-color: #2a2a2a;
            border-radius: .5rem;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            transform: none !important;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;

            }
            &:hover img {
                transform: scale(1.1); // Mover el efecto de scale a la tarjeta en hover
            }


            .card-text {
                opacity: 0;
                transition: opacity 0.5s ease;
                font-size: 1.5rem;
                color: #fff;
                position: absolute;
                z-index: 1;
            }

            .visible {
                opacity: 1;
                animation: ${cardTextFromLeftToRight} .8s forwards;
            }

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 0;
                opacity: 0.8;
                background-color: #e9a13b;
            }

            &:hover {
                &::after {
                    animation: ${leftToRightWidth} .3s forwards;
                }
            }
        }
    }
`;
