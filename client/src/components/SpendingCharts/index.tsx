import { Container } from './styles';

import { Chart } from '../Chart';
import { Loading } from '../Loading';

import { useExpenses } from '../../contexts/ExpensesContext';

export function SpendingCharts() {
  const { expenses, isLoading } = useExpenses();

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {expenses.map(expense => (
            <Chart key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </Container>
  );
}
