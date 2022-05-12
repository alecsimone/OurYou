import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Providers;
