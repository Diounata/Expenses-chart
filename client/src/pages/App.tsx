import { GlobalStyle } from '../components/globalStyle';
import { ThemeProvider } from 'styled-components';
import THEME from '../theme';

import { ExpensesChart } from './ExpensesChart';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />

      <ExpensesChart />
    </ThemeProvider>
  );
}
