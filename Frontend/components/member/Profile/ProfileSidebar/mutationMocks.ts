import CHANGE_DISPLAY_NAME_MUTATION from './changeDisplayNameMutation';

const validNameChangeMock = [
  {
    request: {
      query: CHANGE_DISPLAY_NAME_MUTATION,
      variables: {
        id: '123',
        newName: 'Still Alec',
      },
    },
    result: {
      data: {
        __typename: 'Mutation',
        updateMember: {
          __typename: 'Member',
          id: '123',
          displayName: 'Not Alec',
        },
      },
    },
  },
];

export default validNameChangeMock;
