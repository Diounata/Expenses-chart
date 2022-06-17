import { Router } from 'express';

import { GetBalanceController } from './controllers/GetBalanceController';
import { GetExpansesController } from './controllers/GetExpensesController';

export const routes = Router();

routes.get('/balance', GetBalanceController);
routes.get('/expenses', GetExpansesController);
