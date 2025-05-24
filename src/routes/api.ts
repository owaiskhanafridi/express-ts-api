import { Router, Request, Response } from 'express';

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express API' });
});

router.post('/echo', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

export default router;