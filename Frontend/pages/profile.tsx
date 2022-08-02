import { useRouter } from 'next/router';
import PROFILE_SIDEBAR_QUERY from 'components/member/Profile/ProfileSidebar/query';
import runServerSideQueries from 'utils/runServerSideQueries';
import useMemberData from 'utils/member/useMemberData';
import Profile from 'components/member/Profile';

// interface ProfilePageProps {}

const ProfilePage = (): JSX.Element => {
  const router = useRouter();
  const queryID = router.query.id;
  const { id } = useMemberData('id');

  return (
    <Profile
      memberID={queryID != null ? queryID : id}
      editable={queryID === id && id != null}
    />
  );
};

export async function getServerSideProps(context: any) {
  let variables;
  if (context.query?.id != null) {
    variables = { id: context.query.id };
  }
  return runServerSideQueries(context, [
    { query: PROFILE_SIDEBAR_QUERY, variables },
  ]);
}

export default ProfilePage;
