import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../utils/api';

const ExpensesContext = createContext({} as ContextProps);

interface ExpensesProps {
  id: string;
  day: string;
  amount: number;
  percentage: number;
  isHighestAmount: boolean;
}

interface LastMonthPercentageResponse {
  lastMonthPercentage: number;
}

interface ExpensesResponse {
  expenses: ExpensesProps[];
  totalAmount: number;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  expenses: ExpensesProps[];
  totalAmount: number;
  lastMonthPercentage: number;
  isLoading: boolean;
}

export function ExpensesProvider({ children }: ChildrenProps) {
  const [expenses, setExpenses] = useState<ExpensesProps[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [lastMonthPercentage, setLastMonthPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const expensesRes = await api.get<ExpensesResponse>('/expenses');
      const lastMonthPercentageRes = await api.get<LastMonthPercentageResponse>('/last-month-percentage');

      const expensesData = expensesRes.data;
      const lastMonthPercentageData = lastMonthPercentageRes.data;

      setExpenses(expensesData.expenses);
      setTotalAmount(expensesData.totalAmount);
      setLastMonthPercentage(lastMonthPercentageData.lastMonthPercentage);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses, totalAmount, lastMonthPercentage, isLoading }}>
      {children}
    </ExpensesContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpensesContext);
}
