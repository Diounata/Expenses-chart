import { GlobalStyle } from '../components/globalStyle';
import { ThemeProvider } from 'styled-components';
import THEME from '../theme';

import { ExpensesChart } from './ExpensesChart';
import { ExpensesProvider } from '../contexts/ExpensesContext';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <ExpensesProvider>
        <GlobalStyle />

        <ExpensesChart />
      </ExpensesProvider>
    </ThemeProvider>
  );
}
