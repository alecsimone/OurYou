import Router from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';
import GlobalStyle from '../../styles/globalStyle';
import theme from '../../styles/theme';
import Header from './Header/Header';
import Meta from './Meta';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);
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
