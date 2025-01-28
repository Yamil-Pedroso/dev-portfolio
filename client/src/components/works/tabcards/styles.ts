import styled from "styled-components";

export const TabCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TechHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  .custom-text {
    width: 16rem;
    font-size: 1.4em;
  }
`;

export const ProjContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 4px 6px 1rem rgba(0, 0, 0, 0.7);
`;

export const Card = styled.div`
  background-color: #161616;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #2a2a2a;
  border-radius: 0.3rem;
  overflow: hidden;
  height: 100%;

  .card-cont {
    overflow: hidden;
  }
`;

export const CardImageWrapper = styled.div`
  width: 26rem;
  height: 14.625rem;
  overflow: hidden;
  .panel {
    display: flex;
    flex-direction: column;

    .dark-overlay {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .zoom-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    color: black;
    //filter: grayscale(100%) brightness(0.7);
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  padding: 1rem;

  h1 {
    font-size: 14px;
    margin-top: 0.5rem;
    color: #0099ff;
  }

  p:nth-of-type(1) {
    color: #858585;
    font-size: 14px;
    margin-top: 0.5rem;
  }
`;

export const Content = styled.div`
  width: 23rem;
`;

export const Tech = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2a2a2a;
    padding: 0 .5rem;
    border-left: 1px solid #0099ff;
  p {
    color: #858585;
    font-size: 14px;
    margin-bottom: 0.5rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  color: #858585;
`;
