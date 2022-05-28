import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  width: 100%;
  padding: 1.25rem;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.PALE_ORANGE};
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.DARK_BROWN};
`;

export { Container, Title };
