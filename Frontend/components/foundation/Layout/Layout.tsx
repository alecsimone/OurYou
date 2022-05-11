import { ReactNode, useEffect } from 'react';
import Header from '../Header/Header';
import NavSidebar from '../NavSidebar/NavSidebar';
import ThingsSidebar from '../ThingsSidebar/ThingsSidebar';
import {
  cleanupNProgress,
  initNProgress,
} from './layoutUtils/nProgressHandlers';
import useSidebars from './layoutUtils/useSidebars';
import StyledPage from './StyledLayout';

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

  const [
    navSidebarIsOpen,
    thingsSidebarIsOpen,
    toggleNavSidebar,
    toggleThingsSidebar,
  ] = useSidebars();

  return (
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
  );
};

export default Layout;
