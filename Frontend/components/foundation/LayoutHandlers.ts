import NProgress from 'nprogress';
import Router from 'next/router';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { desktopBreakpointPx } from '../../styles/breakpoints';

const handleRouteStart = () => NProgress.start();
const handleRouteDone = () => NProgress.done();

const initNProgress = () => {
  Router.events.on('routeChangeStart', handleRouteStart);
  Router.events.on('routeChangeComplete', handleRouteDone);
  Router.events.on('routeChangeError', handleRouteDone);
};
export { initNProgress };

const cleanupNProgress = () => {
  Router.events.off('routeChangeStart', handleRouteStart);
  Router.events.off('routeChangeComplete', handleRouteDone);
  Router.events.off('routeChangeError', handleRouteDone);
};
export { cleanupNProgress };

const useNavSidebar = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
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

  return [navSidebarIsOpen, setNavSidebarIsOpen];
};
export { useNavSidebar };
