import {
  useEffect, useState, MouseEvent,
} from 'react';
import { desktopBreakpointPx, mobileBreakpointPx } from '../../../../styles/breakpoints';

type toggleNavSidebarFn = (
  e: MouseEvent<SVGSVGElement>,
  buttonName: 'logo' | 'hamburger'
) => void;
export type { toggleNavSidebarFn };

type toggleThingsSidebarFn = (
  e: MouseEvent<SVGSVGElement | HTMLImageElement> // This could be either the default avatar svg or the avatar img
) => void;
export type { toggleThingsSidebarFn };

const useSidebars = (): [
  boolean,
  boolean,
  toggleNavSidebarFn,
  toggleThingsSidebarFn
] => {
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

  const uncheckedToggleNavSidebar = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    if (
      thingsSidebarIsOpen === true
      && navSidebarIsOpen === false
      && window.innerWidth <= mobileBreakpointPx
    ) {
      // If we're below the mobile breakpoint, the thingsSidebarIsOpen, and we're opening the navSidebar, we want to close the thingsSidebar
      setThingsSidebarIsOpen(false);
    }
    setNavSidebarIsOpen(!navSidebarIsOpen);
  };

  const toggleNavSidebar: toggleNavSidebarFn = (e, buttonName) => {
    if (
      (window.innerWidth <= mobileBreakpointPx && buttonName === 'logo')
      || (window.innerWidth <= desktopBreakpointPx && buttonName === 'hamburger')
    ) {
      uncheckedToggleNavSidebar(e);
    }
  };

  const toggleThingsSidebar: toggleThingsSidebarFn = (e) => {
    e.preventDefault();
    if (
      navSidebarIsOpen === true
      && thingsSidebarIsOpen === false
      && window.innerWidth <= mobileBreakpointPx
    ) {
      // If we're below the mobile breakpoint, the navSidebarIsOpen, and we're opening the thingsSidebar, we want to close the navSidebar
      setNavSidebarIsOpen(false);
    }
    setThingsSidebarIsOpen(!thingsSidebarIsOpen);
  };

  return [navSidebarIsOpen, thingsSidebarIsOpen, toggleNavSidebar, toggleThingsSidebar];
};
export default useSidebars;
