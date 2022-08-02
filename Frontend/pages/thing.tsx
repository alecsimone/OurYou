import { useRouter } from 'next/router';
import THING_QUERY from 'components/things/ThingCard/query';
import runServerSideQueries from 'utils/runServerSideQueries';

// interface ThingPageProps {}

const ThingPage = (): JSX.Element => {
  const router = useRouter();
  const queryID = router.query.id;
  console.log(queryID);

  return <div>{`Thing ${queryID}`}</div>;
};

export async function getServerSideProps(context: any) {
  let variables;
  if (context.query?.id != null) {
    variables = { id: context.query.id };
  }
  return runServerSideQueries(context, [{ query: THING_QUERY, variables }]);
}

export default ThingPage;
