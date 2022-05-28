import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  padding-top: 0.75rem;

  border-top: 2px solid ${({ theme }) => theme.COLORS.CREAM};
`;

const TotalContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.2rem;
`;

const TotalTitle = styled.h3`
  font: ${({ theme }) => theme.FONT.REGULAR};
  font-size: 0.9em;
  opacity: 0.6;
`;

const TotalValue = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.COLORS.DARK_BROWN};
`;

const LastMonthContainer = styled(TotalContainer)`
  justify-content: flex-end;
  text-align: end;
`;

const LastMonthPercentage = styled(TotalValue)`
  font-size: 0.98em;
`;

const LastMonthTitle = styled(TotalTitle)``;

export {
  Container,
  TotalContainer,
  TotalTitle,
  TotalValue,
  LastMonthContainer,
  LastMonthPercentage,
  LastMonthTitle,
};
