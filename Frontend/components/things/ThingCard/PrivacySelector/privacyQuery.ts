import { gql } from '@apollo/client';

const THING_PRIVACY_QUERY = gql`
  query THING_PRIVACY_QUERY($id: ID!) {
    thing(where: { id: $id }) {
      __typename
      id
      privacy
    }
  }
`;

export default THING_PRIVACY_QUERY;
