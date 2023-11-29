import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 5rem;
        text-transform: uppercase;

    }
`

export const BoxWrapper = styled.div`
    width: 50rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div {
        margin: .2rem;
    }

    p {
        font-size: 1rem;
    }
`

export const BoxLink = styled.div`
    width: 10rem;
    height: 8rem;
    background-color: #3f4d32;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .8rem;
    cursor: pointer;
    transition: 1s ease-in-out;
   
   
    &:hover {
    background-color: #37432c;
    box-shadow: 0px 30px 100px -10px rgba(63, 187, 119, 0.4);
    animation: identifier 1s;
    transform: scale(-1.1,1.2);

    @keyframes identifier {
      0% {
        transform: scale(1);
      }
      30% {
        transform: scale(1);
      }
    }

  }

`