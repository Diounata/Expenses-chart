import { useEffect, useState } from 'react';
import { api } from '../../utils/api';

interface BalanceResponse {
  balance: number;
}

export function useBalance() {
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get<BalanceResponse>('/balance').then(({ data }) => {
      setBalance(data.balance);
      setIsLoading(false);
    });
  }, []);

  return { balance, isLoading };
}
