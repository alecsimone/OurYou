import MEMBER_BOX_QUERY from 'components/foundation/Header/MemberBox/queries';

const mockDisplayName = 'Alec';
const mockRep = 1;
const mockAvatar =
  'https://pbs.twimg.com/profile_images/917202644740956160/lMFbGZ-e_400x400.jpg';

export { mockDisplayName, mockRep, mockAvatar };

const initialMemberMock = [
  {
    request: {
      query: MEMBER_BOX_QUERY,
    },
    result: {
      data: {
        authenticatedItem: {
          __typename: 'Member',
          displayName: mockDisplayName,
          rep: mockRep,
          avatar: mockAvatar,
        },
      },
    },
  },
];

export default initialMemberMock;

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