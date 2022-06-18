import { v4 as uuid } from 'uuid';
import { random } from '../../utils/random';
import { ExpensesProps } from './ExpensesTypes';

interface CreateExpensesProps {
  expenses: ExpensesProps[];
  totalAmount: number;
}

export function createExpensesArray(): CreateExpensesProps {
  const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const expenses: ExpensesProps[] = [];

  let totalAmount = 0;

  for (let i in weekday) {
    const id = uuid();
    const amount = Number(random(20, 100).toFixed(2));

    totalAmount += amount;
    expenses.push({ id, day: weekday[i], amount, percentage: 0, isHighestAmount: false });
  }

  return { expenses, totalAmount };
}
