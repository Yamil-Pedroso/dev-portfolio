import styled, { keyframes } from 'styled-components';

const borderAnimation = keyframes`
    0% {
      border-color: #b3b3b3;
    }
    25% {
      border-color: #8d8d8d;
    }
    50% {
      border-color: #323232;
    }
    75% {
      border-color: #454545;
    }
    100% {
      border-color: #2d2d2d;
    }
`;
  

const moveUpDownHandIcon = keyframes`
    0%, 100% {
        transform: translateY(0) rotate(180deg);
    }
    50% {
        transform: translateY(-10%) rotate(180deg);
    }

`;

const leftToRightWidth = keyframes`
    from {
        width: 0;
        background-color: #e9a13b;
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
      transform: translateX(-5%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
`;


export const Container = styled.div`
    margin: 12rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .arrow-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;

        .arrow {
            margin: 0 1rem;
            cursor: pointer;
        }
    }

    .header-wrapper {
        margin: 0;
        position: relative;
        .header-text {
            font-size: 1.5rem;
            color: #b7b7b7;
        }
        h1 {
            font-size: 3rem;
            margin-right: 15rem;
        }
        span {
            font-size: 3rem;
            color: #4ac3a7;
            position: absolute;
            margin-left: 1rem;
        }

        .desc {
            width: 40rem;
            color: #b7b7b7;
        }
    }
    
   
    .card-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 2.5rem;
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
           
            transform: none !important;
            position: relative;
            cursor: pointer;

            .hand-icon {
             position: absolute;
             bottom: -2rem;
             right: 0;
             font-size: 4rem;
             color: #4ac3a7;
             z-index: 2;
             animation: ${moveUpDownHandIcon} 1s infinite;   
           }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;

            }
            &:hover img {
                transform: scale(1.1); 
            }


            .card-text {
                opacity: 0;
                transition: opacity 0.5s ease;
                font-size: 1.5rem;
                text-align: center;
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

    .box-wrapper {
        position: relative;
        
      
        
        .door-icon {
            position: absolute;
            top: 3rem;
            right: 2rem;
            font-size: 2rem;
            color: #2a2a2a;
            cursor: pointer;
        }
        
    .box-content {
        width: 60rem;
        height: 40rem;
        padding: 1rem;
        margin-top: 2rem;
        box-shadow: 2px 2px 2rem 0rem rgba(0, 0, 0, 0.5);
        border: 1px solid #323232;
        border-radius: .5rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow-y: scroll;
        display: none;
        position: relative;

        &.active {
            display: block;
        }
    }
}

`;
