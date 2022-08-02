import { gql, FetchResult } from '@apollo/client';

interface changeDisplayNameOptions {
  id: string;
  newName: string;
}

interface changeDisplayNameResult {
  updateMember: {
    __typename: 'Member';
    id: string;
    displayName: string;
  };
}

interface changeDisplayNameInterface {
  (options: {
    variables: changeDisplayNameOptions;
    optimisticResponse: {
      __typename: 'Mutation';
      updateMember: {
        __typename: 'Member';
        id: string;
        displayName: string;
      };
    };
  }): Promise<
    FetchResult<
      changeDisplayNameResult,
      Record<string, any>,
      Record<string, any>
    >
  >;
}

const CHANGE_DISPLAY_NAME_MUTATION = gql`
  mutation CHANGE_DISPLAY_NAME_MUTATION($id: ID!, $newName: String!) {
    updateMember(where: { id: $id }, data: { displayName: $newName }) {
      __typename
      id
      displayName
    }
  }
`;

export default CHANGE_DISPLAY_NAME_MUTATION;
export type { changeDisplayNameInterface };
