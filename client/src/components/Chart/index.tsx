import { AmountChart, Container, Title } from './styles';
import { useHover } from './useHover';

import { AmountPopup } from './AmountPopup';

interface ExpenseProps {
  id: string;
  day: string;
  amount: number;
  percentage: number;
  isHighestAmount: boolean;
}

interface Props {
  expense: ExpenseProps;
}

export function Chart({ expense }: Props) {
  const { onHover, outHover } = useHover();

  const { day, amount, percentage, isHighestAmount } = expense;

  return (
    <Container onMouseOver={onHover} onMouseOut={outHover}>
      <AmountChart percentage={percentage} isBiggestNumber={isHighestAmount}>
        <AmountPopup amount={amount} />
      </AmountChart>

      <Title>{day}</Title>
    </Container>
  );
}
