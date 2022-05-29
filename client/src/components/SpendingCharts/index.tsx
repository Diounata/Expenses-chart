import { Container } from './styles';

import { Chart } from '../Chart';

export function SpendingCharts() {
  return (
    <Container>
      <Chart title="mon" percentage={10} />
      <Chart title="tue" percentage={30} />
      <Chart title="wed" percentage={80} />
      <Chart title="thu" percentage={45} />
      <Chart title="fri" percentage={60} />
      <Chart title="sat" percentage={52} />
      <Chart title="sun" percentage={2} />
    </Container>
  );
}
