import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font: ${({ theme }) => theme.FONT.REGULAR};
  }

  body {
    display: grid;
    place-items: center;

    background-color: ${({ theme }) => theme.COLORS.CREAM};
  }

  h1, h2, h3, h4, h5, h6 {
    font: ${({ theme }) => theme.FONT.BOLD};
  }
`;

export { GlobalStyle };
