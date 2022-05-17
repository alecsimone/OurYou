# [The Nav Buttons](NavButtons.tsx)

**Two buttons: a hamburger icon that only shows up between the mobile and desktop breakpoints and toggles the nav sidebar, and a plus icon that creates a new thing.**

## [Features](NavButtons.test.tsx)

### It renders a hamburger icon and a plus icon

- The nav buttons should include a hamburger icon and a plus icon

### It toggles the nav sidebar

- The hamburger icon is used to toggle the nav sidebar between the mobile and desktop breakpoints. Above the desktop breakpoint, the nav sidebar is not toggleable, although it can be collapsed. Below the mobile breakpoint, the [LogoBox](../LogoBox/readme.md) handles toggling the nav sidebar.
