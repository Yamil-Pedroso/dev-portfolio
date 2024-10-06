import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap");

  * {
    box-sizing: border-box;
    user-select: none;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    color: white;
    background: black;
    font-family: 'Cormorant Garamond', serif;
    text-transform: uppercase;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  h2 {
    font-size: clamp(1rem, 5vw, 5rem);
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.5em;
    margin-right: -0.5em;
    color: hsl(0, 0, 80%);
    width: 90vw;
    max-width: 1200px;

    & * {
      will-change: transform;
    }
  }
`;

export const ScrollAnimationWrapper = styled.div`
  margin: 20rem auto;
  width: 80%;
  height: 100rem;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  border-radius: .5rem;

  //border: 1px solid #fff;

  /* Estilos para el scrollbar */
  &::-webkit-scrollbar {
    width: 8px; /* Ajusta el ancho del scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Fondo del track transparente */
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5); /* Scrollbar semitransparente */
    border-radius: 10px;
  }

  /* Estilos para Firefox */
  scrollbar-width: thin; /* Hace el scrollbar más delgado */
  scrollbar-color: rgba(255, 255, 255, 0) transparent; /* Color del scrollbar y fondo */
`;

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  z-index: 3;
  height: 7em;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(0.66rem, 2vw, 1rem);
  letter-spacing: 0.5em;
`;

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  opacity: 0;
  transform: translateY(25%);
  transition: all 0.8s ease-in-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Outer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

const bgGradient = `linear-gradient(
  180deg,
  rgba(0, 0, 0, 0.6) 0%,
  rgba(0, 0, 0, 0.3) 100%
)`;

export const Bg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &.bg-1 {
    background-image: ${bgGradient}, url('https://images.unsplash.com/photo-1617478755490-e21232a5eeaf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU1NjM5NA&ixlib=rb-1.2.1&q=75&w=1920');
  }

  &.bg-2 {
    background-image: ${bgGradient}, url('https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920');
  }

  &.bg-3 {
    background-image: ${bgGradient}, url('https://images.unsplash.com/photo-1617438817509-70e91ad264a5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDk4Mg&ixlib=rb-1.2.1&q=75&w=1920');
  }

  &.bg-4 {
    background-image: ${bgGradient}, url('https://images.unsplash.com/photo-1617412327653-c29093585207?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzU2MDgzMQ&ixlib=rb-1.2.1&q=75&w=1920');
  }

  &.bg-5 {
    background-image: ${bgGradient}, url('https://images.unsplash.com/photo-1617141636403-f511e2d5dc17?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxODAzMjc4Mw&ixlib=rb-1.2.1&q=75&w=1920');
    background-position: 50% 45%;
  }
`;

export const SectionHeading = styled.h2`
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.5em;
  margin-right: -0.5em;
  color: hsl(0, 0, 80%);
  width: 90vw;
  max-width: 1200px;
  z-index: 2;
  opacity: 0;
  transform: translateY(20%);
  transition: all 0.8s ease-in-out;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }
`;
