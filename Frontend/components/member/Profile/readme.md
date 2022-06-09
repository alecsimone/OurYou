# [The Profile Component](Profile.tsx)

**Has two sections: a body and a sidebar. The body has a tabbed selector that displays either the things created by the member, the things liked by the member, or the member's friends. The sidebar shows the member's profile information, and if it's the profile of the currently logged in member, it allows them to edit that profile as well.**

## Sub-Components

- **[ProfileBody](./ProfileBody/ProfileBody.tsx)**: Has a tabbed selector that displays either the things created by the member, the things liked by the member, or the member's friends.
- **[ProfileSidebar](./ProfileSidebar/ProfileSidebar.tsx)**: Shows the member's profile information, and if it's the profile of the currently logged in member, it allows them to edit that profile as well.

## [Features](Profile.test.tsx)

### It shows member data when given a valid id

- Checks that each field from the mocked data is being displayed properly
