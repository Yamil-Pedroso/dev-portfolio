import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  width: 200px;
  height: 200px;
  background: grey;
  border-radius: 5px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s, opacity 0.5s;
  will-change: transform;
  cursor: grab;
  overflow: hidden;
  touch-action: none;
  border: 10px solid white;
  
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    border: 10px solid white;
  }
  
  > div {
    will-change: transform;
    height: 100%;
    margin: 0vw 0;
    
    > * {
      height: 100%;
      background-size: cover;
      background-position: center center;
      margin: 0vw 0;
    }
  }

    @media (max-width: 1024px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 960px) {
      width: 100px;
      height: 100px;
    }
`;

  export const Container = styled.div`
    margin: 12rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 60rem;
    height: 100%;
  
    ${Card} {
      margin: 1rem;
    }
    
    @media (max-width: 1024px) {
      width: 40rem;
      margin-top: 2rem;
    }

    @media (max-width: 960px) {
      width: 30rem;
      padding-right: 2rem;
    }

  `;

export const IconTech = styled.div`
  font-size: 3rem; 
  color: #2e9673;
`;

export const GradientIcon = styled.div`
  color: transparent;
  background: linear-gradient(to right, #46ca9e, #4a7bf8, #6289ef);
  -webkit-background-clip: text;
  background-clip: text;
`;