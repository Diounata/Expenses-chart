import styled, { keyframes } from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: space-between;
  gap: 0.75rem;
`;

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const LoadingImg = styled.img`
  animation: ${loadingAnimation} 1.5s linear infinite;
`;

export { Container, LoadingImg };
