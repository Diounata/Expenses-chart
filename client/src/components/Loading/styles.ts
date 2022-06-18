import styled, { keyframes } from 'styled-components';

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

export { LoadingImg };
