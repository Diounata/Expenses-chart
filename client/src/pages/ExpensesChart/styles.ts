import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 1.125rem;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.CREAM};
`;

export { Container };
