import { Router } from 'express';

import { GetBalanceController } from './controllers/GetBalanceController';
import { GetExpansesController } from './controllers/GetExpensesController';
import { GetLastMonthPercentageController } from './controllers/GetLastMonthPercentageController';

export const routes = Router();

routes.get('/balance', GetBalanceController);
routes.get('/expenses', GetExpansesController);
routes.get('/last-month-percentage', GetLastMonthPercentageController);
