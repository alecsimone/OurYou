import LOG_IN_MUTATION from './logInMutation';

const invalidLoginMock = [
  {
    request: {
      query: LOG_IN_MUTATION,
      variables: {
        email: 'test@example.com',
        password: '123456789',
      },
    },
    result: {
      data: {
        authenticateMemberWithPassword: {
          __typename: 'MemberAuthenticationWithPasswordFailure',
          message: 'Authentication failed.',
        },
      },
    },
  },
];
export { invalidLoginMock };

const validLoginMock = [
  {
    request: {
      query: LOG_IN_MUTATION,
      variables: {
        email: 'test@example.com',
        password: '123456789',
      },
    },
    result: {
      data: {
        authenticateMemberWithPassword: {
          __typename: 'MemberAuthenticationWithPasswordSuccess',
          item: {
            __typename: 'Member',
            id: '123',
          },
        },
      },
    },
  },
];
export { validLoginMock };
