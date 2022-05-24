import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import { useApollo } from 'utils/apollo/apolloHandlers';

interface ProvidersProps {
  children: ReactNode;
  pageProps: any;
}

const Providers = ({ children, pageProps }: ProvidersProps): JSX.Element => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Providers;
