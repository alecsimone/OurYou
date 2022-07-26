import { gql } from '@apollo/client';

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
