import { gql } from '@apollo/client';

const THING_COLOR_QUERY = gql`
  query THING_COLOR_QUERY($id: ID!) {
    thing(where: { id: $id }) {
      __typename
      id
      color
    }
  }
`;

export default THING_COLOR_QUERY;
