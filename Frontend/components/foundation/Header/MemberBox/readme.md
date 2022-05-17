# [The Member Box](MemberBox.tsx)

**The Member Box displays the user's name, rep, and avatar. It also includes a notifications icon that alerts the user to any new notifications, and clicking the avatar toggles the [Things Sidebar](../../ThingsSidebar/readme.md).**

## Sub-Components

- **NotificationBox**: Alerts the user to any new notifications and displays them when clicked

## [Features](MemberBox.test.tsx)

### It renders the bell, rep, name, and avatar

- The member box includes a bell icon to alert the user to notifications, as well as their name, rep, and avatar.

### It links to the user's profile page

- The user's name and rep should be wrapped in a link that takes the user to their profile page

### It toggles the things sidebar

- Clicking the user's avatar should call a function, which is passed in as a prop, that toggles the things sidebar.
