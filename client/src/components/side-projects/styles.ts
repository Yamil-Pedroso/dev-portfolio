import styled from "styled-components";

export const TemplatesContainer = styled.div`

`;

export const TemplatesWrapper = styled.div`
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .header-title {
    font-size: 2rem;
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
`;

export const ImageWrapper = styled.div`
  width: 80rem;
  border-radius: 1rem;
  overflow: hidden;

  .templates-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  background-color:rgb(28, 26, 25);
  border-radius: 1rem;

  .icon {
    font-size: 3rem;
    color: #e66f51;
  }
`;
