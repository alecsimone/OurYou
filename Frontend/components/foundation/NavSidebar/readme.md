# [The Nav Sidebar](NavSidebar.tsx)

**Displays a list of links to various other features of the site. It receives its open state and a function to toggle that state as props, because it is controlled by a button on a different component (The logo below the mobile breakpoint, the hamburger icon above it).**

Certain links are only relevant to logged in members, and as such they are not rendered when the user is not logged in.

## Sub-Components

- **[LogOutButton](./LogOutButton.tsx)**: Logs the user out
