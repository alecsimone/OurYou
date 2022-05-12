import { ReactNode, useEffect, useState, MouseEvent, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
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
import ThingsSidebar from './ThingsSidebar/ThingsSidebar';
import {
  cleanupNProgress,
  initNProgress,
  useNavSidebar,
} from './LayoutHandlers';

type toggleNavSidebarFn = (
  e: MouseEvent<SVGSVGElement>,
  buttonName: 'logo' | 'hamburger'
) => void;
export type { toggleNavSidebarFn };

type toggleThingsSidebarFn = (
  e: MouseEvent<SVGSVGElement | HTMLImageElement> // This could be either the default avatar svg or the avatar img
) => void;
export type { toggleThingsSidebarFn };

interface LayoutProps {
  children: ReactNode; // The page component for the currently active route
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  useEffect(() => {
    initNProgress();
    return () => {
      cleanupNProgress();
    };
  }, []);

  const [navSidebarIsOpen, setNavSidebarIsOpen] = useNavSidebar();

  const uncheckedToggleNavSidebar = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    if (
      thingsSidebarIsOpen === true &&
      navSidebarIsOpen === false &&
      window.innerWidth <= mobileBreakpointPx
    ) {
      // If we're below the mobile breakpoint, the thingsSidebarIsOpen, and we're opening the navSidebar, we want to close the thingsSidebar
      setThingsSidebarIsOpen(false);
    }
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

  const [thingsSidebarIsOpen, setThingsSidebarIsOpen] = useState(false);

  const toggleThingsSidebar: toggleThingsSidebarFn = (e) => {
    e.preventDefault();
    if (
      navSidebarIsOpen === true &&
      thingsSidebarIsOpen === false &&
      window.innerWidth <= mobileBreakpointPx
    ) {
      // If we're below the mobile breakpoint, the navSidebarIsOpen, and we're opening the thingsSidebar, we want to close the navSidebar
      setNavSidebarIsOpen(false);
    }
    setThingsSidebarIsOpen(!thingsSidebarIsOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta />
      <StyledPage className="styledPage">
        <Header
          toggleNavSidebar={toggleNavSidebar}
          toggleThingsSidebar={toggleThingsSidebar}
        />
        <main className="mainSection">
          <NavSidebar isOpen={navSidebarIsOpen} />
          <div className="pageComponent">{children}</div>
          <ThingsSidebar isOpen={thingsSidebarIsOpen} />
        </main>
      </StyledPage>
    </ThemeProvider>
  );
};

export default Layout;
