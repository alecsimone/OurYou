import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';

interface MockProvidersProps {
  children: ReactNode;
  mocks?: readonly MockedResponse<Record<string, any>>[] | undefined;
}

const MockProviders = ({
  children,
  mocks,
}: MockProvidersProps): JSX.Element => (
  <MockedProvider mocks={mocks}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </MockedProvider>
);

export default MockProviders;
