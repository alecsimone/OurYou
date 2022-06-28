import { mockDisplayName, mockRep } from 'utils/testing/initialMemberMock';
import MEMBER_BOX_QUERY from './memberBoxQuery';

const delayedMock = [
  {
    delay: 999999999,
    request: {
      query: MEMBER_BOX_QUERY,
    },
    result: {},
  },
];

export { delayedMock };

const avatarlessMemberMock = [
  {
    request: {
      query: MEMBER_BOX_QUERY,
    },
    result: {
      data: {
        authenticatedItem: {
          __typename: 'Member',
          id: '123',
          role: 'Member',
          displayName: mockDisplayName,
          rep: mockRep,
          avatar: '',
        },
      },
    },
  },
];

export { avatarlessMemberMock };

const loggedOutMock = [
  {
    request: {
      query: MEMBER_BOX_QUERY,
    },
    result: {
      data: {
        authenticatedItem: null,
      },
    },
  },
];

export { loggedOutMock };
