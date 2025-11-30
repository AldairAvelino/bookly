# Bookly API

An application to borrow a book from someone else.

## Project Structure

```
src/
├── config/       - Configuration files
├── controllers/  - Request handlers
├── middlewares/  - Express middleware
├── models/       - Data models
├── routes/       - API route definitions
├── types/        - TypeScript type definitions
├── utils/        - Utility functions
└── server.ts     - Application entry point
```

## Path Aliases

This project uses TypeScript path aliases for cleaner imports:

- `@config/*` → `src/config/*`
- `@controllers/*` → `src/controllers/*`
- `@middlewares/*` → `src/middlewares/*`
- `@models/*` → `src/models/*`
- `@routes/*` → `src/routes/*`
- `@types/*` → `src/types/*`
- `@utils/*` → `src/utils/*`

### Example Usage

```typescript
// Instead of:
import { config } from '../../../config/config.js';

// Use:
import { config } from '@config/config.js';
```

**Note:** When using ES modules (`.js` extensions are required in imports), make sure to add `.js` to the end of import paths, even when importing `.ts` files.

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production server
- `npm test` - Run tests

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. The API will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/books` - Get all books
- `POST /api/books` - Create a new book
