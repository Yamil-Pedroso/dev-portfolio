import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 3rem;
    overflow-y: auto;

    h1 {
      font-size: 3rem;
      color: #60dfe2;
      font-family: 'IBM Plex Mono', monospace;
    }

    h2 {
      font-size: 1.5rem;
      color: #EAEAEA;
      font-family: 'IBM Plex Mono', monospace;
    }

    h3 {
      font-size: 1.5rem;
      color: #66b4bd;
      font-family: 'IBM Plex Mono', monospace;
    }

    .overview {
      font-size: 1.5rem;
        color: #EAEAEA;
        font-family: 'IBM Plex Mono', monospace;
    }
`;

export const MainContent = styled.div`
  display: flex;    
  justify-content: center;
    gap: 6rem;
`;

export const Section = styled.div`
   .bracket-set {
      color: #8e8e8e;
    }
   .content {
      .text {
        color: #d4b782;
      }
   }
`;

export const DownloadButton = styled.button`
    background-color: #d4b782;
    border: none;
    color: #181818;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    border: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`;
