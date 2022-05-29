import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5625rem;

  min-height: 12.5rem;
`;

const AmountChart = styled.div<{ percentage: number; isBiggestNumber: boolean }>`
  width: 7.5vw;
  height: ${({ percentage }) => percentage}%;

  border-radius: 3px;
  background-color: ${({ theme, isBiggestNumber }) => theme.COLORS[isBiggestNumber ? 'CYAN' : 'RED']};
`;

const Title = styled.h3`
  font: ${({ theme }) => theme.FONT.REGULAR};
  font-size: 0.5625rem;
  opacity: 0.6;
`;

export { Container, AmountChart, Title };
