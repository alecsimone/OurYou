import { gql } from '@apollo/client';

const THING_TITLE_QUERY = gql`
  query THING_TITLE_QUERY($id: ID!) {
    thing(where: { id: $id }) {
      __typename
      id
      title
    }
  }
`;

export default THING_TITLE_QUERY;
