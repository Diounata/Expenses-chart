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

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  expenses: ExpensesProps[];
  isLoading: boolean;
}

export function ExpensesProvider({ children }: ChildrenProps) {
  const [expenses, setExpenses] = useState<ExpensesProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get<ExpensesProps[]>('http://localhost:3001/expenses').then(res => {
      setExpenses(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses, isLoading }}>{children}</ExpensesContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpensesContext);
}
