import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.125rem;

  width: 100vw;
  min-height: 100vh;
  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.COLORS.CREAM};
`;

export { Container };
