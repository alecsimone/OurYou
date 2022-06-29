import { gql } from '@apollo/client';

const navSidebarMock = [
  {
    request: {
      query: gql`
        query FLEXIBLE_MEMBER_QUERY {
          authenticatedItem {
            ... on Member {
              id
            }
          }
        }
      `,
    },
    result: {
      data: {
        authenticatedItem: {
          __typename: 'Member',
          id: '123',
        },
      },
    },
  },
];

export default navSidebarMock;
