import LOG_IN_MUTATION from '../LogIn/logInMutation';
import RESET_PASSWORD_MUTATION from './resetPasswordMutation';

const validResetMock = [
  {
    request: {
      query: RESET_PASSWORD_MUTATION,
      variables: {
        code: 'test',
        email: 'test@example.com',
        password: '123456789',
        confirmPassword: '123456789',
      },
    },
    result: {
      data: {
        redeemMemberPasswordResetToken: null,
      },
    },
  },
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
export { validResetMock };

const failedResetMock = [
  {
    request: {
      query: RESET_PASSWORD_MUTATION,
      variables: {
        code: 'test',
        email: 'test@example.com',
        password: '123456789',
        confirmPassword: '123456789',
      },
    },
    result: {
      data: {
        redeemMemberPasswordResetToken: {
          code: 'FAILURE',
          message: 'Failed to reset password',
        },
      },
    },
  },
];
export { failedResetMock };

const expiredResetMock = [
  {
    request: {
      query: RESET_PASSWORD_MUTATION,
      variables: {
        code: 'test',
        email: 'test@example.com',
        password: '123456789',
        confirmPassword: '123456789',
      },
    },
    result: {
      data: {
        redeemMemberPasswordResetToken: {
          code: 'TOKEN_EXPIRED',
          message: 'Failed to reset password',
        },
      },
    },
  },
];
export { expiredResetMock };

const redeemedResetMock = [
  {
    request: {
      query: RESET_PASSWORD_MUTATION,
      variables: {
        code: 'test',
        email: 'test@example.com',
        password: '123456789',
        confirmPassword: '123456789',
      },
    },
    result: {
      data: {
        redeemMemberPasswordResetToken: {
          code: 'TOKEN_REDEEMED',
          message: 'Failed to reset password',
        },
      },
    },
  },
];
export { redeemedResetMock };
