import { gql } from '@apollo/client';

const THING_CONNECTION_QUERY = gql`
  query THING_CONNECTION_QUERY($id: ID!) {
    thing(where: { id: $id }) {
      __typename
      id
      subjectConnections {
        id
        subject {
          id
          privacy
        }
        object {
          id
          privacy
        }
        relationship
        strength
        createdAt
      }
      objectConnections {
        id
        subject {
          id
        }
        object {
          id
        }
        relationship
        strength
        createdAt
      }
    }
  }
`;

export default THING_CONNECTION_QUERY;
