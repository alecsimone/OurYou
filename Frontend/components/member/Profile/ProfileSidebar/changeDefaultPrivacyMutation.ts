import { gql, FetchResult } from '@apollo/client';

interface changeDefaultPrivacyOptions {
  id: string;
  newPrivacy: 'Private' | 'Friends' | 'FriendsOfFriends' | 'Public';
}

interface changeDefaultPrivacyResult {
  changeDefaultPrivacy: {
    __typename: 'Mutation';
    id: string;
    defaultPrivacy: 'Private' | 'Friends' | 'FriendsOfFriends' | 'Public';
  };
}

interface changeDefaultPrivacyInterface {
  (options: {
    variables: changeDefaultPrivacyOptions;
    optimisticResponse: {
      __typename: 'Mutation';
      updateMember: {
        __typename: 'Member';
        id: string;
        defaultPrivacy: 'Private' | 'Friends' | 'FriendsOfFriends' | 'Public';
      };
    };
  }): Promise<
    FetchResult<
      changeDefaultPrivacyResult,
      Record<string, any>,
      Record<string, any>
    >
  >;
}

const CHANGE_DEFAULT_PRIVACY_MUTATION = gql`
  mutation CHANGE_DISPLAY_NAME_MUTATION($id: ID!, $newPrivacy: String!) {
    updateMember(where: { id: $id }, data: { defaultPrivacy: $newPrivacy }) {
      __typename
      id
      defaultPrivacy
    }
  }
`;

export default CHANGE_DEFAULT_PRIVACY_MUTATION;
export type { changeDefaultPrivacyInterface };
