import { Request, Response } from 'express';

import { random } from '../../utils/random';

export function GetLastMonthPercentageController(req: Request, res: Response) {
  try {
    const lastMonthPercentage = Number(random(1.5, 3).toFixed(1));

    return res.status(200).json({ lastMonthPercentage });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
