# [The Member Box](MemberBox.tsx)

**The Member Box displays the user's name, rep, and avatar. It also includes a notifications icon that alerts the user to any new notifications, and clicking the avatar toggles the [Things Sidebar](../../ThingsSidebar/readme.md).**

## Sub-Components

- **[NotificationBox](./NotificationBox.tsx)**: Alerts the user to any new notifications and displays them when clicked
- **[MemberBoxWithData](./MemberBoxWithData.tsx)**: Takes in the data from the MemberBox query and renders either the LoggedInMemberBox or the LoggedOutMemberBox
- **[LoggedInMemberBox](./LoggedInMemberBox.tsx)**: Handles the logged in state of the MemberBox. Shows the notifications, rep, name, and avatar of the currently logged in member.
- **[LoggedOutMemberBox](./LoggedOutMemberBox.tsx)**: Handles the logged out state of the MemberBox. Shows a prompt to Sign up or Log in, each of which opens a modal with the corresponding form.
