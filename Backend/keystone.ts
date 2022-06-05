import 'dotenv/config';
import { config } from '@keystone-6/core';
import lists from './lists';
import { withAuth, session } from './auth';
import extendGraphqlSchema from './lists/resolvers';

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL || 'http://localhost:333'],
        credentials: true,
      },
    },
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL || 'postgres://',
      useMigrations: true,
    },
    extendGraphqlSchema,
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
