import { gql, useQuery } from '@apollo/client';

const useMemberData = (fields: string) => {
  const FLEXIBLE_MEMBER_QUERY = gql`
    query FLEXIBLE_MEMBER_QUERY {
      authenticatedItem {
        ... on Member {
          ${fields}
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(FLEXIBLE_MEMBER_QUERY);
  if (data?.authenticatedItem) {
    return data.authenticatedItem;
  }
  if (data?.authenticatedItem == null) {
    return { id: null };
  }
  if (loading) return { loading: true };
  if (error) return { error };
  return null;
};

export default useMemberData;
