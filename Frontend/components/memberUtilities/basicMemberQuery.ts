import { gql } from '@apollo/client';

const BASIC_MEMBER_QUERY = gql`
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
export default BASIC_MEMBER_QUERY;
