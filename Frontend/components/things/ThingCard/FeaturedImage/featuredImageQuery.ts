import { gql } from '@apollo/client';

const THING_FEATURED_IMAGE_QUERY = gql`
  query THING_FEATURED_IMAGE_QUERY($id: ID!) {
    thing(where: { id: $id }) {
      __typename
      id
      featuredImage
    }
  }
`;

export default THING_FEATURED_IMAGE_QUERY;
