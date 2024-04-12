import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
    
    h2 {
        text-align: center;
        color: #7b42dd;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 35rem;
    margin: 1.5rem auto;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    margin: 10px;
    border: 1px solid #ccc;
    color: #fff;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;
    background-color: #19191c;
    box-shadow: 0 0 10px  rgba(37, 69, 255, 0.2);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1) translateY(-1rem);
        border-radius: 50%;
        border: 1px solid #88419c;
        box-shadow: 0 0 40px  rgba(139, 35, 136, 0.2);

        .bottle__img {
          @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }

            }

            animation: rotate 2s linear infinite;

            &:hover {
                animation-play-state: paused;

            }
        }

        .ancient_scroll__img {
            width: 10rem;
        }

    }
`;

export const CardImgDescription = styled.div`
    color: #b54fd1;
    margin-top: .5rem;
    font-size: .8rem;
`;

export const DisplayNone = styled.div`
    display: none;
`;
