export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiPrefix: '/api',
  databaseUrl: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/bookly',
} as const;
