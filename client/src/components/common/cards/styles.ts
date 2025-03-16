import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 10rem;
  height: 15rem;
  background-color: #373432;
  border-radius: 1rem;
  box-shadow: 0 0 6rem 5pxrgba(0, 0, 0, 0.5);
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 8rem;
    height: 12rem;
  }

  &:hover {
    //transform: scale(0.8);
    //transition: all 0.3s ease-in-out;
    //background-color: transparent;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1rem;
    color: #6e6e61;

    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  a {
    padding: 0.2rem 1rem;
    background-color: #e76f51;
    color: #d0d0cd;
    border-radius: 0.5rem;
    margin-top: 1rem;
    text-decoration: none;

  }
`;
