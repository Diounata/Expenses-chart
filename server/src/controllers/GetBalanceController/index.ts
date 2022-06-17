import { Request, Response } from 'express';

import { random } from '../../utils/random';

export function GetBalanceController(req: Request, res: Response) {
  try {
    const balance = Number(random(800, 1000).toFixed(2));

    return res.status(200).json({ balance });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
