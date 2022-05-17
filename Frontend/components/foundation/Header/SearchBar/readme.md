# [The Search Bar](SearchBar.tsx)

**Searches all the things on the site. It has a search icon which can show or hide the actual search bar between the mobile and desktop breakpoints.**

## [Features](SearchBar.test.tsx)

### It renders a search icon and a search bar

- The component should render both a search bar and the search icon

### It only shows the search bar when the showingSearch prop is present

- The component receives the showingSearch prop from Header and doesn't render the search bar unless it's true

### It calls toggle showing search when the search icon is clicked

- The component receives a toggleShowingSearch prop from header and calls it when the searchIcon is clicked

## It lets you type in the search box

- Because otherwise, what's the point?
