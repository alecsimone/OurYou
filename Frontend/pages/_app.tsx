/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Layout from 'components/foundation/Layout/Layout';
import Meta from 'components/foundation/Meta';
import Providers from 'components/foundation/Providers';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
}

export default MyApp;
