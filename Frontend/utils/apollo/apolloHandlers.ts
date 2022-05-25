import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { useMemo } from 'react';
import createApolloClient from './apolloCreator';

let preExistingApolloClient: ApolloClient<NormalizedCacheObject> | null;

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const initializeApollo = (cookie: string | null, initialState = null) => {
  // If we've stored an ApolloClient, we want to work with that one. If we haven't, we want to create a new one.
  let currentApolloClient;
  if (preExistingApolloClient != null) {
    currentApolloClient = preExistingApolloClient;
  } else {
    currentApolloClient = createApolloClient(cookie);
  }

  if (initialState != null) {
    // This block is copied exactly from https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
    // Get existing cache, loaded during client side data fetching
    const existingCache = currentApolloClient.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    currentApolloClient.cache.restore(data);
  }

  // If we're on the server, we want to create a new ApolloClient every time, so we just return this one without storing it
  if (typeof window === 'undefined') return currentApolloClient;

  // If we're on the client, we want our ApolloClient to persist, so we store it first and then return it
  if (preExistingApolloClient == null) {
    preExistingApolloClient = currentApolloClient;
  }

  return currentApolloClient;
};
export default initializeApollo;

const addApolloCacheToPageProps = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: {
    props: any;
  }
) => {
  // This function taken exactly from https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js (Although I did add type annotations)
  if (pageProps?.props) {
    // eslint-disable-next-line no-param-reassign
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
};
export { addApolloCacheToPageProps };

const useApollo = (pageProps: any) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(null, state), [state]);
  return store;
};
export { useApollo };
