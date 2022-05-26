import { QueryResult, useQuery } from '@apollo/client';
import MEMBER_BOX_QUERY from './queries';

interface memberDataInterface {
  displayName: string;
  rep: number;
  avatar: string | null;
}

export type { memberDataInterface };

interface memberBoxMemberData {
  authenticatedItem: memberDataInterface | null;
}

export type { memberBoxMemberData };

const useMemberBoxQuery = (): QueryResult<memberBoxMemberData> => {
  const result = useQuery<memberBoxMemberData>(MEMBER_BOX_QUERY, {
    // eslint-disable-next-line no-console
    onError: (e) => console.log(e),
  });
  return result;
};

export default useMemberBoxQuery;
