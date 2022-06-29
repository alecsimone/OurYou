import PROFILE_SIDEBAR_QUERY from 'components/member/Profile/ProfileSidebar/query';
import runServerSideQueries from 'utils/runServerSideQueries';

// interface ProfilePageProps {}

const ProfilePage = (): JSX.Element => <div>ProfilePage</div>;

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
