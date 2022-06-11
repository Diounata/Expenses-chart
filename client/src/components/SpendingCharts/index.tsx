import { Container, LoadingImg } from './styles';

import { Chart } from '../Chart';
import loadingSVG from '../../assets/loading.svg';

import { useExpenses } from '../../contexts/ExpensesContext';

export function SpendingCharts() {
  const { expenses, isLoading } = useExpenses();

  return (
    <Container>
      {isLoading ? (
        <LoadingImg src={loadingSVG} alt="Loading" width="25px" height="25px" />
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
