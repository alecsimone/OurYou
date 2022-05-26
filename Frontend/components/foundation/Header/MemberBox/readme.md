# [The Member Box](MemberBox.tsx)

**The Member Box displays the user's name, rep, and avatar. It also includes a notifications icon that alerts the user to any new notifications, and clicking the avatar toggles the [Things Sidebar](../../ThingsSidebar/readme.md).**

## Sub-Components

- **[NotificationBox](./NotificationBox.tsx)**: Alerts the user to any new notifications and displays them when clicked
- **[MemberBoxWithData](./MemberBoxWithData.tsx)**: Takes in the data from the MemberBox query and renders either the LoggedInMemberBox or the LoggedOutMemberBox
- **[LoggedInMemberBox](./LoggedInMemberBox.tsx)**: Handles the logged in state of the MemberBox. Shows the notifications, rep, name, and avatar of the currently logged in member.
- **[LoggedOutMemberBox](./LoggedOutMemberBox.tsx)**: Handles the logged out state of the MemberBox. Shows a prompt to Sign up or Log in, each of which opens a modal with the corresponding form.

## [Features](MemberBox.test.tsx)

### It shows a sign up or log in prompt if not logged in

- If no logged in member is found, the Member Box should prompt the user to sign up or log in
- Clicking on this prompt should open a modal with sign up and log in forms. (Currently it just says 'Sign up and Log in forms')

### It renders the loading state, then the bell, rep, name, and avatar

- Before the query data comes in, it should say "Authenticating..." as the query is loading.
- The member box includes a bell icon to alert the user to notifications, as well as their name, rep, and avatar.

### It links to the user's profile page

- The user's name and rep should be wrapped in a link that takes the user to their profile page

### It toggles the things sidebar

- Clicking the user's avatar should call a function, which is passed in as a prop, that toggles the things sidebar.
