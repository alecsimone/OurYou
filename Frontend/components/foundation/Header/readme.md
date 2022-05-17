# [The Header](Header.tsx)

**The app's header. It contains the apps's logo and the currently logged in user's information. On larger screens, it also includes a search bar, a new post button, the app's name, and a button to toggle the nav sidebar.**

## [useToggleableSearch](useToggleableSearch.ts)

Allows the user to toggle showing the search bar. When the search bar is shown on mid-sized screens, the app name and logo are hidden, so it has to be handled at this level, not at the level of the search box. It also handles the resize listener and shows or hides the search bar accordingly.

## Sub-Components

- **[LogoBox](LogoBox/readme.md)**: Displays the app name and logo, handles toggling the nav sidebar on mobile, links to the home page on larger screens.
- **[MemberBox](MemberBox/readme.md)**: Shows the user's information, toggles the things sidebar.
- **[NavButtons](NavButtons/readme.md)**: Hosts a create post button, as well as a hamburger icon to toggle showing the nav sidebar on smaller screens.
- **[SearchBar](SearchBar/readme.md)**: Allows the user to search things on the site. Expandable on smaller screens.

## [Features](Header.test.tsx)

### It shows and hides the search bar

- Between the mobile and desktop breakpoints, Clicking the search icon should show the search bar and hide the LogoBox.
