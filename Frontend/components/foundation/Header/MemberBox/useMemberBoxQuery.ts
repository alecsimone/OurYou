import { QueryResult, useQuery } from '@apollo/client';
import MEMBER_BOX_QUERY from './queries';

interface memberBoxMemberData {
  displayName: string;
  rep: number;
  avatar: string | null;
}

const useMemberBoxQuery = (): QueryResult<memberBoxMemberData> => {
  const result = useQuery<memberBoxMemberData>(MEMBER_BOX_QUERY, {
    onError: (e) => console.log(e),
  });
  return result;
};

export default useMemberBoxQuery;
