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
  justify-content: center;
  align-items: center;
  border: 1px solid #2a2a2a;
  border-radius: 0.3rem;
  overflow: hidden;

  .card-cont {
    overflow: hidden;
  }
`;

export const CardImageWrapper = styled.div`
  .panel {
    display: flex;
    flex-direction: column;

    .dark-overlay {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .zoom-img {
    width: 26rem;
    height: 14.625rem;
    object-fit: cover;
    color: black;
    filter: grayscale(100%) brightness(0.7);
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;

  h1 {
    font-size: 14px;
  }
  p {
    color: #858585;
    font-size: 14px;
    width: 80%;
  }
`;
