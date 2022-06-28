# [The Layout Component](Layout.tsx)

**Fundamentally, this component exists to lay out the Header, BottomBar, and the three column layout with the main section and two sidebars. It also handles all the functionality for opening and closing those sidebars. This component also hosts the NProgress init and cleanup functions.**

## [useSidebars](useSidebars.ts)

For each of the Nav and Things sidebars, it returns a boolean describing whether it is open or closed, and a function that toggles that state.

The hook also handles opening and closing the Things sidebar when routing to or from the homepage.

Finally, it handles the resize listener that opens or closes the two sidebars when the window size crosses the desktop breakpoint. Note that the Things sidebar only does this on the home page.
