import { Container, BalanceContainer, BalanceTitle, Balance } from './styles';

import { Loading } from '../Loading';
import SVGLogo from '../../assets/logo.svg';

import { formatCurrency } from '../../utils/formatCurrency';
import { useBalance } from './useBalance';

export function Header() {
  const { balance, isLoading } = useBalance();

  return (
    <Container>
      <BalanceContainer>
        <BalanceTitle>My balance</BalanceTitle>

        <Balance>{isLoading ? <Loading /> : formatCurrency(balance)}</Balance>
      </BalanceContainer>

      <img src={SVGLogo} alt="Logo" />
    </Container>
  );
}
