import Profile from 'components/member/Profile';
import PROFILE_SIDEBAR_QUERY from 'components/member/Profile/ProfileSidebar/query';
import useMemberData from 'utils/member/useMemberData';
import runServerSideQueries from 'utils/runServerSideQueries';

// interface MePageProps {}

const MePage = (): JSX.Element => {
  const { id } = useMemberData('id');
  return (
    <Profile
      memberID={id}
      editable
    />
  );
};

export async function getServerSideProps(context: any) {
  return runServerSideQueries(context, [{ query: PROFILE_SIDEBAR_QUERY }]);
}

export default MePage;
