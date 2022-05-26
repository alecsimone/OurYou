import { gql } from '@apollo/client';
import { memberBoxFields } from 'components/foundation/Header/MemberBox/queries';

const INITIAL_MEMBER_QUERY = gql`
  ${memberBoxFields}
  query MEMBER_BOX_QUERY {
    authenticatedItem {
      ... on Member {
        ...MemberBoxFields
      }
    }
  }
`;
export default INITIAL_MEMBER_QUERY;
