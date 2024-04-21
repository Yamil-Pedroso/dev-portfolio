import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
      padding: "12px 20px";
    .loader {
        width: 1.2rem;
        aspect-ratio: 1;
        display: grid;
        border-radius: 50%;
        background:
          linear-gradient(0deg, rgba(255, 255, 255, 0.50) 30%, transparent 30% 70%, rgba(255, 255, 255, 1) 70%) 50%/8% 100%,
          linear-gradient(90deg, rgba(255, 255, 255, 0.25) 30%, transparent 30% 70%, rgba(255, 255, 255, 0.75) 70%) 50%/100% 8%;
        background-repeat: no-repeat;
        animation: l23 1s infinite steps(12);
      }
      .loader::before,
      .loader::after {
         content: "";
         grid-area: 1/1;
         border-radius: 50%;
         background: inherit;
         opacity: 0.915;
         transform: rotate(30deg);
      }
      .loader::after {
         opacity: 0.83;
         transform: rotate(60deg);
      }
      @keyframes l23 {
        100% {transform: rotate(1turn)}
    }
`;


const animation = keyframes`
  0%, 25% {
    background-size: 8px 0, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px;
    background-position: 0 50%, 0 calc(50% - 2px), 0 calc(50% + 2px), 50% 50%, 50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%, 100% calc(50% - 2px), 100% calc(50% + 2px);
  }
  50% {
    background-size: 8px 100%, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px;
    background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px), 50% 50%, 50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%, 100% calc(50% - 2px), 100% calc(50% + 2px);
  }
  75% {
    background-size: 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px, 8px 4px, 8px 0, 8px 4px, 8px 4px;
    background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px), 50% 50%, 50% calc(0% - 2px), 50% calc(100% + 2px), 100% 50%, 100% calc(50% - 2px), 100% calc(50% + 2px);
  }
  95%, 100% {
    background-size: 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px, 8px 4px, 8px 100%, 8px 4px, 8px 4px;
    background-position: 0 50%, 0 calc(0% - 2px), 0 calc(100% + 2px), 50% 50%, 50% calc(0% - 2px), 50% calc(100% + 2px), 100% 50%, 100% calc(0% - 2px), 100% calc(100% + 2px);
  }
`;

export const Loader2 = styled.div`
  width: 40px;
  aspect-ratio: 1;
  background: 
    linear-gradient(#fff 0 0), radial-gradient(farthest-side at bottom, #fff 93%, #0000), radial-gradient(farthest-side at top, #fff 93%, #0000),
    linear-gradient(#fff 0 0), radial-gradient(farthest-side at bottom, #fff 93%, #0000), radial-gradient(farthest-side at top, #fff 93%, #0000),
    linear-gradient(#fff 0 0), radial-gradient(farthest-side at bottom, #fff 93%, #0000), radial-gradient(farthest-side at top, #fff 93%, #0000);
  background-repeat: no-repeat;
  animation: ${animation} 1s infinite alternate;
`;