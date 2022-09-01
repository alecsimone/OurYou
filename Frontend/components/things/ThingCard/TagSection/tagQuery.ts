import { gql } from '@apollo/client';

const THING_TAG_QUERY = gql`
  query THING_TAG_QUERY($id: ID!) {
    thing(where: { id: $id }) {
      __typename
      id
      partOfTags {
        __typename
        id
        title
      }
    }
  }
`;

export default THING_TAG_QUERY;
