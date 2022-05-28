import { GlobalStyle } from '../components/globalStyle';
import { ThemeProvider } from 'styled-components';
import THEME from '../theme';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
