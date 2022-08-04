import { useRouter } from 'next/router';
import THING_QUERY from 'components/things/ThingCard/query';
import runServerSideQueries from 'utils/runServerSideQueries';
import ThingCard from 'components/things/ThingCard/ThingCard';
import ErrorAlert from 'components/foundation/Error/ErrorAlert';

// interface ThingPageProps {}

const ThingPage = (): JSX.Element => {
  const router = useRouter();
  const queryID = router.query.id;
  console.log(queryID);

  if (queryID == null) {
    return (
      <ErrorAlert error="You must provide the ID of the thing you'd like to view" />
    );
  }

  if (Array.isArray(queryID)) {
    return <ErrorAlert error="Invalid ID" />;
  }

  return <ThingCard id={queryID} />;
};

export async function getServerSideProps(context: any) {
  let variables;
  if (context.query?.id != null) {
    variables = { id: context.query.id };
  }
  return runServerSideQueries(context, [{ query: THING_QUERY, variables }]);
}

export default ThingPage;
