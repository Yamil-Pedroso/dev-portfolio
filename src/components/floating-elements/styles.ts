import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: grey;
  border-radius: 5px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s, opacity 0.5s;
  will-change: transform;
  border: 10px solid white;
  cursor: grab;
  overflow: hidden;
  touch-action: none;

  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
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
`;
