import { ReactNode, useEffect } from 'react';
import BottomBar from '../BottomBar';
import Header from '../Header';
import NavSidebar from '../NavSidebar';
import ThingsSidebar from '../ThingsSidebar';
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
      <BottomBar />
    </StyledPage>
  );
};

export default Layout;
