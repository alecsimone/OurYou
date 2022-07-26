import { gql } from '@apollo/client';

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
