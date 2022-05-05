import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import theme from '../../styles/theme';
import Header from './Header';
import Meta from './Meta';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  console.log('Layout');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
