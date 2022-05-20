import data from './queries';

interface memberBoxMemberData {
  displayName: string;
  rep: number;
  avatar: string | null;
}

interface memberBoxData {
  data: memberBoxMemberData;
  loading: boolean;
  error:
    | false
    | {
        message: string;
      };
}

const useMemberBoxQuery = (): memberBoxData => ({
  data,
  loading: false,
  error: false,
});

export default useMemberBoxQuery;
