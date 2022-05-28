import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 1.125rem;

  width: 100vw;
  height: 100vh;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.COLORS.CREAM};
`;

export { Container };
