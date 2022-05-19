import { select } from '@keystone-6/core/fields';

const privacy = select({
  options: [
    { label: 'Public', value: 'Public' },
    { label: 'Private', value: 'Private' },
    { label: 'Friends', value: 'Friends' },
    { label: 'FriendsOfFriends', value: 'FriendsOfFriends' },
  ],
  defaultValue: 'Friends',
  validation: {
    isRequired: true,
  },
});

export default privacy;
