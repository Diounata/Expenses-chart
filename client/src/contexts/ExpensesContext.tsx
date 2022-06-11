import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ExpensesContext = createContext({} as ContextProps);

interface ExpensesProps {
  id: string;
  day: string;
  amount: number;
  percentage: number;
  isHighestAmount: boolean;
}

interface ExpensesResponseProps {
  expenses: ExpensesProps[];
  amountTotal: number;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  expenses: ExpensesProps[];
  amountTotal: number;
  isLoading: boolean;

  formatCurrency(value: number): string;
}

export function ExpensesProvider({ children }: ChildrenProps) {
  const [expenses, setExpenses] = useState<ExpensesProps[]>([]);
  const [amountTotal, setAmountTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  function formatCurrency(value: number): string {
    return value.toLocaleString();
  }

  useEffect(() => {
    axios.get<ExpensesResponseProps>('http://localhost:3001/expenses').then(({ data }) => {
      setExpenses(data.expenses);
      setAmountTotal(data.amountTotal);
      setIsLoading(false);
    });
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses, amountTotal, isLoading, formatCurrency }}>
      {children}
    </ExpensesContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpensesContext);
}
