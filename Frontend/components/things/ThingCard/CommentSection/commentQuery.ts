import { gql } from '@apollo/client';
import commentFields from 'utils/fieldLists/commentFields';

const THING_COMMENT_QUERY = gql`
  query THING_COMMENT_QUERY($id: ID!) {
    thing(where: { id: $id }) {
      __typename
      id
      comments {
        ${commentFields}
      }
    }
  }
`;

export default THING_COMMENT_QUERY;
