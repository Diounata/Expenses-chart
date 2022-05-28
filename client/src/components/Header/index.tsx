import { Container, BalanceContainer, BalanceTitle, Balance } from './styles';

import SVGLogo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <BalanceContainer>
        <BalanceTitle>My balance</BalanceTitle>

        <Balance>$921.48</Balance>
      </BalanceContainer>

      <img src={SVGLogo} alt="Logo" />
    </Container>
  );
}
