import { Router } from 'express';

import { GetExpansesController } from './controllers/GetExpensesController';

export const routes = Router();

routes.get('/expenses', GetExpansesController);
