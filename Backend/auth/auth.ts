import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

let sessionSecret = process.env.SESSION_SECRET;

// Here is a best practice! It's fine to not have provided a session secret in dev,
// however it should always be there in production.
if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production'
    );
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
  }
}

// Here we define how auth relates to our schemas.
// What we are saying here is that we want to use the list `User`, and to log in
// we will need their email and password.
const { withAuth } = createAuth({
  listKey: 'Member',
  identityField: 'email',
  sessionData: 'id role displayName',
  secretField: 'password',
  initFirstItem: {
    // If there are no items in the database, keystone will ask you to create
    // a new user, filling in these fields.
    fields: ['displayName', 'email', 'password'],
  },
});

// This defines how long people will remain logged in for.
// This will get refreshed when they log back in.
const sessionMaxAge = 60 * 60 * 24 * 365 * 5; // 5 years

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret!,
});

export { withAuth, session };
