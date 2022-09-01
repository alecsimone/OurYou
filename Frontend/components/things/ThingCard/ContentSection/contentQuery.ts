import { gql } from '@apollo/client';
import contentPieceFields from 'utils/fieldLists/contentPieceFields';

const THING_CONTENT_QUERY = gql`
  query THING_CONTENT_QUERY($id: ID!) {
    thing(where: { id: $id }) {
      __typename
      id
      content {
        ${contentPieceFields}
      }
    }
  }
`;

export default THING_CONTENT_QUERY;
