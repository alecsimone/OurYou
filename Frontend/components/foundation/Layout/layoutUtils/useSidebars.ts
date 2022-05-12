import { desktopBreakpointPx, mobileBreakpointPx } from '@styles/breakpoints';
import { useEffect, useReducer } from 'react';

interface sidebarStateInterface {
  nav: boolean;
  things: boolean;
}

const useSidebars = (): [boolean, boolean, () => void, () => void] => {
  const sidebarToggler = (
    state: sidebarStateInterface,
    action: 'nav' | 'things' | 'openNav' | 'closeAll'
  ): sidebarStateInterface => {
    const newState = JSON.parse(JSON.stringify(state));

    if (action === 'nav') {
      // This action always toggles the nav
      newState.nav = !state.nav;
      if (window.innerWidth <= mobileBreakpointPx && state.things) {
        // If we're below the mobile breakpoint and the things sidebar is already open, it needs to close it
        newState.things = false;
      }
    } else if (action === 'things') {
      // This action always toggles the things sidebar
      newState.things = !state.things;
      if (window.innerWidth <= mobileBreakpointPx && state.nav) {
        // If we're below the mobile breakpoint and the nav is already open, it needs to close it
        newState.nav = false;
      }
    } else if (action === 'openNav') {
      // This action JUST opens the nav. It's useful for our effect that opens the nav by default on bigger screens
      newState.nav = true;
    } else if (action === 'closeAll') {
      // This action closes our sidebars. It's useful for our resize listener that closes the sidebars when resizing the screen below the desktopBreakpoint
      newState.nav = false;
      newState.things = false;
    }
    return newState;
  };

  const initialSidebarState = {
    nav: false,
    things: false,
  };

  const [sidebarState, sidebarDispatch] = useReducer(
    sidebarToggler,
    initialSidebarState
  );
  const { nav: navSidebarIsOpen, things: thingsSidebarIsOpen } = sidebarState;

  useEffect(() => {
    if (window.innerWidth > desktopBreakpointPx) {
      sidebarDispatch('openNav');
    }
    window.addEventListener('resize', () => {
      // TODO handle manual showing of the sidebar
      // If someone shows the sidebar, then resizes the window, it will close on them.
      if (window.innerWidth > desktopBreakpointPx) {
        sidebarDispatch('openNav');
      } else {
        sidebarDispatch('closeAll');
      }
    });
  }, []);

  const toggleNavSidebar = () => {
    sidebarDispatch('nav');
  };

  const toggleThingsSidebar = () => {
    sidebarDispatch('things');
  };

  return [
    navSidebarIsOpen,
    thingsSidebarIsOpen,
    toggleNavSidebar,
    toggleThingsSidebar,
  ];
};
export default useSidebars;
