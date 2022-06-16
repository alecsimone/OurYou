import { gql } from '@apollo/client';
import { GraphQLError } from 'graphql';
import { mockAvatar } from 'utils/testing/initialMemberMock';
import { SET_AVATAR_MUTATION } from './useEditableAvatar';

const avatarMock = [
  {
    request: {
      query: gql`
        query FLEXIBLE_MEMBER_QUERY {
          authenticatedItem {
            ... on Member {
              id
              avatar
            }
          }
        }
      `,
    },
    result: {
      data: {
        authenticatedItem: {
          __typename: 'Member',
          id: '123',
          avatar: mockAvatar,
        },
      },
    },
  },
];

export { avatarMock };

const mutationErrorMock = [
  {
    request: {
      query: SET_AVATAR_MUTATION,
      variables: {
        newAvatarLink: 'https://www.reddit.com',
        uploadedAvatar: null,
      },
    },
    result: {
      errors: [
        new GraphQLError(
          'Avatar must be an image. Valid file types are .jpg, .jpeg, .gif, .png, and .webp.'
        ),
      ],
    },
  },
];

export { mutationErrorMock };

export const replacementAvatar = 'https://www.test.com/example.jpg';

const mutationSuccessMock = [
  {
    request: {
      query: SET_AVATAR_MUTATION,
      variables: {
        newAvatarLink: replacementAvatar,
        uploadedAvatar: null,
      },
    },
    result: {
      data: {
        setAvatar: {
          __typename: 'Member',
          id: '123',
          avatar: replacementAvatar,
        },
      },
    },
  },
];

export { mutationSuccessMock };
