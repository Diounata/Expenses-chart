import { Request, Response } from 'express';

import { createExpensesArray } from './createExpensesArray';
import { classifyExpensesAmount } from './classifyExpensesAmount';

export function GetExpansesController(req: Request, res: Response) {
  try {
    const { expenses, totalAmount } = createExpensesArray();

    const classifiedExpenses = classifyExpensesAmount(expenses, totalAmount);

    if (classifiedExpenses.length !== 7) throw 'Missing weekday expenses';

    return res.status(200).json({ totalAmount, expenses: classifiedExpenses });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
