import { useEffect, useState } from 'react';
import { Container, BalanceContainer, BalanceTitle, Balance } from './styles';

import { Loading } from '../LoadingImg';
import SVGLogo from '../../assets/logo.svg';

import { api } from '../../utils/api';
import { formatCurrency } from '../../utils/formatCurrency';

export function Header() {
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get<{ balance: number }>('/balance').then(({ data }) => {
      setBalance(data.balance);
      setIsLoading(false);
    });
  }, []);

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
