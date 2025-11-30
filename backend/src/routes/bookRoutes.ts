import { Router } from 'express';
import { getBooks, createBook } from '@controllers/bookController.js';

const bookRouter = Router();

bookRouter.get('/', getBooks);
bookRouter.post('/', createBook);

export { bookRouter };
