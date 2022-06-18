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
  amountTotal: number;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  expenses: ExpensesProps[];
  amountTotal: number;
  lastMonthPercentage: number;
  isLoading: boolean;
}

export function ExpensesProvider({ children }: ChildrenProps) {
  const [expenses, setExpenses] = useState<ExpensesProps[]>([]);
  const [amountTotal, setAmountTotal] = useState(0);
  const [lastMonthPercentage, setLastMonthPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const expensesRes = api.get<ExpensesResponse>('/expenses');
    const lastMonthPercentageRes = api.get<LastMonthPercentageResponse>('/last-month-percentage');

    type PromiseRes = [typeof expensesRes, typeof lastMonthPercentageRes];
    const requests: PromiseRes = [expensesRes, lastMonthPercentageRes];

    Promise.all<PromiseRes>(requests).then(res => {
      const expensesData = res[0].data;
      const lastMonthPercentageData = res[1].data;

      setExpenses(expensesData.expenses);
      setAmountTotal(expensesData.amountTotal);
      setLastMonthPercentage(lastMonthPercentageData.lastMonthPercentage);
      setIsLoading(false);
    });
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses, amountTotal, lastMonthPercentage, isLoading }}>
      {children}
    </ExpensesContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpensesContext);
}
