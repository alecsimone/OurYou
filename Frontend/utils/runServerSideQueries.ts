import { DocumentNode } from 'graphql';
import BASIC_MEMBER_QUERY from 'components/memberUtilities/basicMemberQuery';
import initializeApollo, {
  saveApolloCacheInPageProps,
} from './apollo/apolloHandlers';

const runServerSideQueries = async (
  context: any,
  queries: DocumentNode[] = []
) => {
  const { cookie } = context.req.headers;
  const apolloClient = initializeApollo(cookie);

  // We want every page to include the basic member query, so we'll add it here
  const queriesWithMemberQuery = queries.concat(BASIC_MEMBER_QUERY);

  const queryResults = [];
  for (const query of queriesWithMemberQuery) {
    queryResults.push(
      apolloClient.query({
        query,
      })
    );
  }
  // Because we're just trying to get this data into the apollo cache, we don't have to do anything with it, but we do have to wait until it's been fetched
  await Promise.all(queryResults);

  return saveApolloCacheInPageProps(apolloClient, {
    props: {},
  });
};
export default runServerSideQueries;
