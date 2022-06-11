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
}

export function ExpensesProvider({ children }: ChildrenProps) {
  const [expenses, setExpenses] = useState<ExpensesProps[]>([]);

  useEffect(() => {
    axios.get<ExpensesProps[]>('http://localhost:3001/expenses').then(res => setExpenses(res.data));
  }, []);

  return <ExpensesContext.Provider value={{ expenses }}>{children}</ExpensesContext.Provider>;
}

export function useExpenses() {
  return useContext(ExpensesContext);
}
