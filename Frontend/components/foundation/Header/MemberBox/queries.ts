import { gql } from '@apollo/client';

const MEMBER_BOX_QUERY = gql`
  query MEMBER_BOX_QUERY {
    authenticatedItem {
      ... on Member {
        displayName
        rep
        avatar
      }
    }
  }
`;
export default MEMBER_BOX_QUERY;
