import { ExpensesProps } from './ExpensesTypes';

export function classifyExpensesAmount(expensesArray: ExpensesProps[], amountTotal: number): ExpensesProps[] {
  const expenses = expensesArray;

  let highestAmount = 0;
  let lastHighestAmountId = 0;

  for (let i in expenses) {
    if (expenses[i].amount > highestAmount) {
      expenses[lastHighestAmountId].isHighestAmount = false;
      expenses[i].isHighestAmount = true;

      highestAmount = expenses[i].amount;
      lastHighestAmountId = Number(i);
    }

    expenses[i].percentage = Number(((expenses[i].amount * 100) / amountTotal).toFixed(2));
  }

  return expenses;
}
