import express from 'express';
import type { Express } from 'express';
import { config } from '@config/config.js';
import { router } from '@routes/index.js';
import { errorHandler } from '@middlewares/errorHandler.js';

const app: Express = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', router);

// Error handling middleware
app.use(errorHandler);

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
