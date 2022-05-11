import { useEffect, useState } from 'react';
import {
  desktopBreakpointPx,
  mobileBreakpointPx,
} from '../../../../styles/breakpoints';

const useSidebars = (): [boolean, boolean, () => void, () => void] => {
  const [navSidebarIsOpen, setNavSidebarIsOpen] = useState(false);
  const [thingsSidebarIsOpen, setThingsSidebarIsOpen] = useState(false);

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

  const toggleNavSidebar = () => {
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

  const toggleThingsSidebar = () => {
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

  return [
    navSidebarIsOpen,
    thingsSidebarIsOpen,
    toggleNavSidebar,
    toggleThingsSidebar,
  ];
};
export default useSidebars;
