import {
  Container,
  LastMonthContainer,
  LastMonthPercentage,
  LastMonthTitle,
  TotalContainer,
  TotalTitle,
  TotalValue,
} from './styles';

export function Footer() {
  return (
    <Container>
      <TotalContainer>
        <TotalTitle>Total this month</TotalTitle>

        <TotalValue>$478.33</TotalValue>
      </TotalContainer>

      <LastMonthContainer>
        <LastMonthPercentage>+2.4%</LastMonthPercentage>

        <LastMonthTitle>from last month</LastMonthTitle>
      </LastMonthContainer>
    </Container>
  );
}
