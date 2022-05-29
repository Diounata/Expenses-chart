import { AmountChart, Container, Title } from './styles';

interface Props {
  title: string;
  percentage: number;
}

export function Chart({ title, percentage }: Props) {
  return (
    <Container>
      <AmountChart percentage={percentage} isBiggestNumber={percentage === 80} />

      <Title>{title}</Title>
    </Container>
  );
}
