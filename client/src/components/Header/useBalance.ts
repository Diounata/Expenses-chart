import { useEffect, useState } from 'react';
import { api } from '../../utils/api';

interface BalanceResponse {
  balance: number;
}

export function useBalance() {
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await api.get<BalanceResponse>('/balance');
    const data = res.data;

    setBalance(data.balance);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { balance, isLoading };
}
