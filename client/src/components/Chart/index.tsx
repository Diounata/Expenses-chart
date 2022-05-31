import { AmountChart, Container, Title } from './styles';
import { useHover } from './useHover';

import { AmountPopup } from './AmountPopup';

interface Props {
  title: string;
  percentage: number;
}

export function Chart({ title, percentage }: Props) {
  const { onHover, outHover } = useHover();

  return (
    <Container onMouseOver={onHover} onMouseOut={outHover}>
      <AmountChart percentage={percentage} isBiggestNumber={percentage === 80}>
        <AmountPopup amount={percentage} />
      </AmountChart>

      <Title>{title}</Title>
    </Container>
  );
}
