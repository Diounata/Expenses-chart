import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: -9999px;

  padding: 0.625rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_BROWN};
  border-radius: 5px;

  font: ${({ theme }) => theme.FONT.BOLD};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.COLORS.PALE_ORANGE};
`;

export { Container };
