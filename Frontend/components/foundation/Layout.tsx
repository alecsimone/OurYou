import Router from 'next/router';
import { ReactNode, useEffect, useState, MouseEvent, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from '../../styles/globalStyle';
import theme from '../../styles/theme';
import Header from './Header/Header';
import Meta from './Meta';
import NavSidebar from './NavSidebar/NavSidebar';
import StyledPage from './StyledLayout';
import {
  mobileBreakpointPx,
  desktopBreakpointPx,
} from '../../styles/breakpoints';

type toggleNavSidebarFn = (
  e: MouseEvent<SVGSVGElement>,
  buttonName: 'logo' | 'hamburger'
) => void;
export type { toggleNavSidebarFn };

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

  const [navSidebarIsOpen, setNavSidebarIsOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth > desktopBreakpointPx) {
      setNavSidebarIsOpen(true);
    }
    window.addEventListener('resize', () => {
      // TODO handle manual showing of the sidebar
      // If someone shows the sidebar, then resizes the window, it will close on them.
      if (window.innerWidth > desktopBreakpointPx) {
        setNavSidebarIsOpen(true);
      } else {
        setNavSidebarIsOpen(false);
      }
    });
  }, []);

  const uncheckedToggleNavSidebar = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    // if (
    //   thingsSidebarIsOpen === true &&
    //   navSidebarIsOpen === false
    // ) {
    //   setThingsSidebarIsOpen(false);
    // }
    setNavSidebarIsOpen(!navSidebarIsOpen);
  };

  const toggleNavSidebar: toggleNavSidebarFn = (e, buttonName) => {
    if (
      (window.innerWidth <= mobileBreakpointPx && buttonName === 'logo') ||
      (window.innerWidth <= desktopBreakpointPx && buttonName === 'hamburger')
    ) {
      uncheckedToggleNavSidebar(e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta />
      <StyledPage className="styledPage">
        <Header toggleNavSidebar={toggleNavSidebar} />
        <main className="mainSection">
          <NavSidebar isOpen={navSidebarIsOpen} />
          <div className="pageComponent">{children}</div>
        </main>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Layout;
