import Router from 'next/router';
import { ReactNode, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';
import GlobalStyle from '../../styles/globalStyle';
import theme from '../../styles/theme';
import Header from './Header/Header';
import Meta from './Meta';
import NavSidebar from './NavSidebar/NavSidebar';

const StyledPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  main.mainSection {
    flex-grow: 1;
    display: flex;
    overflow: hidden;
  }
`;

interface LayoutProps {
  children: ReactNode; // The page component for the currently active route
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
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
      <StyledPage className="styledPage">
        <Header />
        <main className="mainSection">
          <NavSidebar />
          {children}
        </main>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Layout;
