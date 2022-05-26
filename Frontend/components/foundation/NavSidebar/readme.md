# [The Nav Sidebar](NavSidebar.tsx)

**Displays a list of links to various other features of the site. It receives its open state and a function to toggle that state as props, because it is controlled by a button on a different component (The logo below the mobile breakpoint, the hamburger icon above it).**

## Sub-Components

- **[LogOutButton](./LogOutButton.tsx)**: Logs the user out

## [Features](NavSidebar.test.tsx)

### It renders the nav links

- Simple test that makes sure all the nav links are rendered.
- Note that we're importing the actual list of nav links that we're supposed to render from the component itself.

### It collapses and Expands

- The Nav Sidebar should start expanded, then clicking the collapse button should collapse it, and clicking again should open it.

### It routes and calls toggle on click

- Clicking one of the links should change the page route to match that link and should call the toggleOpen function to close the sidebar.
