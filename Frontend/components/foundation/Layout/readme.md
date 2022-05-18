# [The Layout Component](Layout.tsx)

**Fundamentally, this component exists to lay out the Header, BottomBar, and the three column layout with the main section and two sidebars. It also handles all the functionality for opening and closing those sidebars. This component also hosts the NProgress init and cleanup functions.**

## [useSidebars](useSidebars.ts)

For each of the Nav and Things sidebars, it returns a boolean describing whether it is open or closed, and a function that toggles that state.

The hook also handles opening and closing the Things sidebar when routing to or from the homepage.

Finally, it handles the resize listener that opens or closes the two sidebars when the window size crosses the desktop breakpoint. Note that the Things sidebar only does this on the home page.

## [Features](Layout.test.tsx)

### It toggles the sidebars

- Testing with a window.innerWidth set just above the mobile breakpoint on the home page.
- The Things Sidebar should start hidden, show when the avatar is clicked, and then hide again after a second click.
- The Nav Sidebar should start hidden, show when the hamburger icon is clicked, then hide again.

### It does not render the things sidebar at first if not on the homepage, but can still open it

- The test starts on the /twitter route, above the desktop breakpoint
- Thus the Things Sidebar should start hidden, clicking the avatar should show it, and clicking again should hide it again.
- Then we can route to the homepage, and the Things Sidebar should show up. Clicking the avatar should hide it, and clicking again should show it.
- And if we route back to the twitter page, the Things Sidebar should hide again.
