import { Container } from './styles';

interface Props {
  amount: number;
}

export function AmountPopup({ amount }: Props) {
  return <Container>${amount.toFixed(2)}</Container>;
}
