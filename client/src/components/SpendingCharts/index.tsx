import { Container } from './styles';

import { Chart } from '../Chart';

import { useExpenses } from '../../contexts/ExpensesContext';

export function SpendingCharts() {
  const { expenses } = useExpenses();

  return (
    <Container>
      {expenses.map(expense => (
        <Chart key={expense.id} expense={expense} />
      ))}
    </Container>
  );
}
