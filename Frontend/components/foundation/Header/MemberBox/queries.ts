// This would be a file that contains the graphql template string that useQuery uses.

import { gql } from '@apollo/client';

const MEMBER_BOX_QUERY = gql`
  query MEMBER_BOX_QUERY($id: ID!) {
    authenticatedItem {
      ... on Member {
        displayName
        rep
        avatar
      }
    }
  }
`;
export default MEMBER_BOX_QUERY;

// const data = {
//   avatar:
//     'https://pbs.twimg.com/profile_images/917202644740956160/lMFbGZ-e_400x400.jpg',
//   displayName: 'Alec',
//   rep: 1,
// };

// export default data;
