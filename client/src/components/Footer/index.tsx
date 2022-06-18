import {
  Container,
  LastMonthContainer,
  LastMonthPercentage,
  LastMonthTitle,
  TotalContainer,
  TotalTitle,
  TotalValue,
} from './styles';

import { Loading } from '../LoadingImg';

import { useExpenses } from '../../contexts/ExpensesContext';
import { formatCurrency } from '../../utils/formatCurrency';

export function Footer() {
  const { amountTotal, lastMonthPercentage, isLoading } = useExpenses();

  return (
    <Container>
      <TotalContainer>
        <TotalTitle>Total this month</TotalTitle>

        <TotalValue>{isLoading ? <Loading /> : formatCurrency(amountTotal)}</TotalValue>
      </TotalContainer>

      <LastMonthContainer>
        <LastMonthPercentage>
          {isLoading ? <Loading /> : `+${lastMonthPercentage}%`}
        </LastMonthPercentage>

        <LastMonthTitle>from last month</LastMonthTitle>
      </LastMonthContainer>
    </Container>
  );
}
