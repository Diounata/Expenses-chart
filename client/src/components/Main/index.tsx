import { Container, Title } from './styles';

import { SpendingCharts } from '../SpendingCharts';
import { Footer } from '../Footer';

export function Main() {
  return (
    <Container>
      <Title>Spending - Last 7 days</Title>

      <SpendingCharts />
      <Footer />
    </Container>
  );
}
