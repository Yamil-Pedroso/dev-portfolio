import styled from "styled-components";

export const TemplatesContainer = styled.div``;

export const TemplatesWrapper = styled.div`
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: -7rem;
  }

  .header-title {
    font-size: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .header-desc {
    width: 55%;
    text-align: center;
    font-size: 2rem;
    background-image: linear-gradient(to right, #0099ff, #55b1bf, #4e67a5);
    background-size: 40%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    @media screen and (max-width: 1250px) {
      width: 70%;
      font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
      width: 80%;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 1rem;
  width: 80%;
  height: 38rem;
  background-color: rgb(41, 38, 34);
  border-radius: 2rem;
  gap: 0.3rem;
  overflow: hidden;

  @media screen and (max-width: 1250px) {
    width: 90%;
    flex-direction: column;
    height: 70rem;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 60rem;
    overflow: hidden;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80rem;
  border-radius: 1rem;
  overflow: hidden;

  @media screen and (max-width: 1250px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .templates-img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 1250px) {

    }

    @media screen and (max-width: 768px) {

      &:hover {
        transform: scale(1.1);
        transition: all 0.5s ease;
      }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  background-color: rgb(28, 26, 25);
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    padding: 1.5rem 0;
  }

  .icon {
    font-size: 3rem;
    color: #e66f51;
  }
`;
