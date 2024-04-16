import styled from 'styled-components';
interface CardHeaderProps {
  isShrunk: boolean;
}

interface FontProps {
  isSmallSize: boolean;
}

export const Container = styled.div`

    h4 {
        text-align: center;
        margin-top: 18rem;
        color: rgba(135, 146, 158, 1);
    }
`;

export const CardHeader = styled.div<CardHeaderProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ isShrunk }) => (isShrunk ? '20rem' : '40rem')};
    height: ${({ isShrunk }) => (isShrunk ? '6rem' : '10rem')};
    margin: 2rem auto;
    background: rgba(255, 255, 255, 0.10);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    z-index: 999;
  `;

export const HeaderTitle = styled.div<FontProps>`
   display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ isSmallSize }) => (isSmallSize ? '1.5rem' : '3rem')};
    background: -webkit-linear-gradient( 92.1deg,  rgba(45, 85, 131, 1) 0.1%, rgba(97, 255, 218, 1) 100.2% );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;

     div {
      margin-top: 1rem;
     }
  `;

export const CardWrapper= styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Card = styled.body`
  width: 70rem;
  height: 40rem;
  border-radius: 5px;
  box-shadow: 0 0 1rem rgba(140, 35, 140, 0.1);
 
  overflow: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  overflow-x: auto;
  scrollbar-width: thin; 
  scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1); 
  cursor: pointer;

`;

export const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin: 0 10px;
  }
`;

export const HeaderContentWrapper = styled.div`
   width: 35rem;
   margin: 0 auto;
   position: relative;

   .rocket-one {
     position: absolute;
     bottom: 6rem;
   }

    .rocket-two {
      position: absolute;
      right: 0rem;
      bottom: 6rem;
    }
`;

export const Button = styled.button`
  width: 6rem;
  height: 3rem;
  margin-left: 1rem;
  display: block;
  background: #88419c;
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #7b42dd;
  }
`;