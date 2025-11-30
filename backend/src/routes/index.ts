import { Router } from 'express';
import { bookRouter } from '@routes/bookRoutes.js';

const router = Router();

router.use('/books', bookRouter);

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

export { router };
