import styled from "styled-components";

export const Container = styled.div`
  width: 82.5rem;
  height: auto;
  margin: 0 auto;
  display: flex;
  border: 1px solid #232323;
  border-radius: 5px;
  margin-bottom: 15rem;
`;

export const UserContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin: 0 auto;
  gap: 8rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  h2 {
    color: #fff;
    font-size: 3rem;

    span {
      color: #0099ff;
    }
  }

  p {
    color: #767676;
  }

  footer {
    margin-top: auto;
    p {
      color: #767676;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  .icon-box {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #303030;
    border-radius: 5px;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const SocialNetWorkWrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;
  margin-top: auto;
  svg {
    height: 3rem;
    width: 3rem;
    margin: 1rem;
    padding: 0;
    fill: #c8bdb0;
    transition: fill 0.2s;
    cursor: pointer;

    &:hover {
      fill: #0099ff;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftContent = styled.div``;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  background-color: #161616;
`;

export const RightSideForm = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  div {
    display: flex;
    flex-direction: column;
  }
  label {
    color: #767676;
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }
  input {
    padding: 0.2rem;
    background-color: #000000;
    color: white;
    outline: none;
  }
  textarea {
    padding: 1rem;
    background-color: #000000;
    color: white;
  }

  button {
    padding: 1rem;
    margin-top: 1rem;
    background-color: #000000;
    color: white;
    box-shadow: 2px 2px 2rem 0rem rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
    border-radius: 5rem;
    cursor: pointer;
    animation: borderAnimation 8s linear infinite;

    @keyframes borderAnimation {
      0% {
        border-color: #006699; /* Azul oscuro */
    }
    25% {
        border-color: #004d73; /* Azul más profundo */
    }
    50% {
        border-color: #00334d; /* Azul casi negro */
    }
    75% {
        border-color: #004d73; /* Azul más profundo */
    }
    100% {
        border-color: #006699; /* Azul oscuro */
    }
    }
  }
`;

export const LeftSideForm = styled.div`
  width: 50%;
`;
