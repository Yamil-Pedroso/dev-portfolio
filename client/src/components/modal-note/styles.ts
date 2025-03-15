import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #272727;
  padding: 1.8rem;
  border-radius: 0.5rem;
  max-width: 25rem;
  width: 100%;
  text-align: center;

  @media (max-width: 60rem) {
    max-width: 21.875rem;
    padding: 1rem;
  }

  @media (max-width: 48rem) {
    max-width: 18.75rem;
    padding: 0.875rem;
  }

  @media (max-width: 34.375rem) {
    max-width: 16.25rem;
    padding: 0.75rem;
  }
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 60rem) {
    font-size: 1.375rem;
  }

  @media (max-width: 48rem) {
    font-size: 1.25rem;
  }

  @media (max-width: 34.375rem) {
    font-size: 1.125rem;
  }
`;

export const ModalText = styled.p`
  margin: 0.625rem 0;
  font-size: 1rem;

  @media (max-width: 60rem) {
    font-size: 0.9375rem;
  }

  @media (max-width: 48rem) {
    font-size: 0.875rem;
  }

  @media (max-width: 34.375rem) {
    font-size: 0.8125rem;
  }
`;

export const CloseButton = styled.button`
  margin-top: 1.25rem;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #E76F51;
  color: white;
  border: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b6573f;
  }

  @media (max-width: 60rem) {
    padding: 0.5rem 1rem;
    font-size: 0.9375rem;
  }

  @media (max-width: 48rem) {
    padding: 0.5rem 0.875rem;
    font-size: 0.875rem;
  }

  @media (max-width: 34.375rem) {
    padding: 0.4375rem 0.75rem;
    font-size: 0.8125rem;
  }
`;
