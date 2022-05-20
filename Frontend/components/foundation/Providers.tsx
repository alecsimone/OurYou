import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import client from 'utils/apolloCreator';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </ApolloProvider>
);

export default Providers;
