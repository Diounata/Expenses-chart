import { useEffect, useState } from 'react';
import { Container, BalanceContainer, BalanceTitle, Balance } from './styles';
import axios from 'axios';

import SVGLogo from '../../assets/logo.svg';

import { formatCurrency } from '../../utils/formatCurrency';

export function Header() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get<{ balance: number }>('http://localhost:3001/balance')
      .then(({ data }) => setBalance(data.balance));
  }, []);

  return (
    <Container>
      <BalanceContainer>
        <BalanceTitle>My balance</BalanceTitle>

        <Balance>${formatCurrency(balance)}</Balance>
      </BalanceContainer>

      <img src={SVGLogo} alt="Logo" />
    </Container>
  );
}
