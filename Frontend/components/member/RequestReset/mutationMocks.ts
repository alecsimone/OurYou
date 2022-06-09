import { REQUEST_RESET_MUTATION } from './useRequestReset';

const validResetMock = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: {
        email: 'test@example.com',
      },
    },
    result: {
      data: {
        sendMemberPasswordResetLink: true,
      },
    },
  },
];
export default validResetMock;
