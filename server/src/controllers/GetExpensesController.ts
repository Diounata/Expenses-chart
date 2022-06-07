import { Request, Response } from 'express';
import { ExpensesProps } from '../types/ExpensesProps';
import { random } from '../utils/random';

export function GetExpansesController(req: Request, res: Response) {
  const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const expenses: ExpensesProps[] = [];

  try {
    for (let i in weekday) {
      const amount = Number(random(50, 5000).toFixed(2));

      expenses.push({ day: weekday[i], amount });
    }

    if (expenses.length !== 7) throw 'All expenses was not included';

    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
