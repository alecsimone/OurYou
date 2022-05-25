/* eslint-disable no-console */
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { endpoint } from 'globalConstants';

interface HttpLinkOptions {
  uri: string;
  credentials: 'include';
  headers?: {
    cookie: string;
  };
}
const createHttpLink = (cookie: string | null) => {
  const options: HttpLinkOptions = {
    uri: endpoint,
    credentials: 'include',
  };

  if (cookie != null) {
    options.headers = {
      // cookie,
    };
  }

  return new HttpLink(options);
};

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (operation?.operationName) {
    console.log(`Error in ${operation.operationName}`);
  }
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, extensions }) => {
      console.log(`[GraphQL error] - ${extensions?.code}: ${message}`);
    });

  if (networkError) {
    console.log(
      `[Network error] - [${networkError?.name}]: ${networkError.message}`
    );
  }
});

const createApolloClient = (cookie: string | null) =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, createHttpLink(cookie)]),
    cache: new InMemoryCache(),
  });

export default createApolloClient;
