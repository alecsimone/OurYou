import type { NextPage } from 'next';
import runServerSideQueries from 'utils/runServerSideQueries';
import RichText from 'components/foundation/RichText';

const Home: NextPage = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      maxWidth: '80%',
      margin: 'auto',
    }}
  >
    <RichText text="**Bold**. And then some plain text. ** More bold, __Bold and underline,** Just Underline__ and then some text after" />
  </div>
);

export async function getServerSideProps(context: any) {
  return runServerSideQueries(context);
}

export default Home;
