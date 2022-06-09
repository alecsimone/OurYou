import PROFILE_SIDEBAR_QUERY from './query';

const validProfileSidebarMock = [
  {
    request: {
      query: PROFILE_SIDEBAR_QUERY,
      variables: {
        id: '123',
      },
    },
    result: {
      data: {
        getProfileSidebarData: {
          __typename: 'Member',
          id: '123',
          avatar: '',
          defaultPrivacy: 'Friends',
          displayName: 'Alec',
          role: 'Member',
          rep: 1,
          giveableRep: 1,
          email: 'test@example.com',
          twitchName: '',
          twitterUserName: '',
        },
      },
    },
  },
];
export { validProfileSidebarMock };
