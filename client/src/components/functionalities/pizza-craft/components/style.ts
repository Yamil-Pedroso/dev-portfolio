import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 130px;
  height: 130px;
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
    object-fit: cover;
    width: 150px;
    height: 150px;
`;

// Aside.tsx
export const AsideContainer = styled.div`
  width: 35rem;
  height: 100vh;
  background-color: #a76231;
   position: absolute;
    top: 0;
    right: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;