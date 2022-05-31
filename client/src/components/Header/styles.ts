import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 1.25rem;

  border-radius: 10px;
  background-color: rgb(${({ theme }) => theme.COLORS.RED});
`;

const BalanceContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const BalanceTitle = styled.h3`
  font: ${({ theme }) => theme.FONT.REGULAR};
  color: ${({ theme }) => theme.COLORS.PALE_ORANGE};
`;

const Balance = styled.h2`
  font-size: 1.5em;
  color: ${({ theme }) => theme.COLORS.PALE_ORANGE};
`;

export { Container, BalanceContainer, BalanceTitle, Balance };
