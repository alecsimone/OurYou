import runServerSideQueries from 'utils/runServerSideQueries';

// interface ProfilePageProps {}

const ProfilePage = (): JSX.Element => <div>ProfilePage</div>;

export async function getServerSideProps(context: any) {
  return runServerSideQueries(context);
}

export default ProfilePage;
