import MEMBER_BOX_QUERY from 'components/foundation/Header/MemberBox/queries';

const basicMemberMock = [
  {
    request: {
      query: MEMBER_BOX_QUERY,
    },
    result: {
      data: {
        authenticatedItem: {
          __typename: 'Member',
          displayName: 'Alec',
          rep: 1,
          avatar:
            'https://pbs.twimg.com/profile_images/917202644740956160/lMFbGZ-e_400x400.jpg',
        },
      },
    },
  },
];

export default basicMemberMock;

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
