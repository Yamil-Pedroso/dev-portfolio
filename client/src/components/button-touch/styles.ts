import styled from "styled-components";

interface IButtonTouch {
  boxShadow?: false | string;
}

export const Container = styled.div<IButtonTouch>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  width: 10rem;
  height: 10rem;
  margin-top: 1.6rem;
  position: relative;

  .btn {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    //box-shadow: -.3rem -.3rem 1px 2px rgba(64, 85, 109, 0.5);
    box-shadow: ${(props) =>
      props.boxShadow || "-.3rem -.3rem 1px 2px rgba(64, 85, 109, 0.5)"};
    cursor: pointer;
    position: absolute;

    @media (max-width: 768px) {
      width: 2.5rem !important;
      height: 2.5rem !important;
    }
  }

  .btn-x {
    background-color: #2b7fc9;
    top: 0;
  }

  .btn-b {
    background-color: #ffd241;
    bottom: 0;

    @media (max-width: 768px) {
      bottom: .5rem;
    }
  }

  @media (max-width: 1200px) {
     z-index: 1;
     width: 8rem;
  }
`;

export const HorizontalButtons = styled.div`
  display: flex;
  gap: 3rem;

  .btn-y {
    background-color: #1ec951;
    left: 0;
    top: 3.5rem;

    @media (max-width: 768px) {
      left: -.5rem;
    }
  }

  .btn-a {
    background-color: #ef4136;
    right: 0;
    top: 3.5rem;

    @media (max-width: 768px) {
      right: -.5rem;
    }
  }

  @media (max-width: 1200px) {
   
  }
`;
