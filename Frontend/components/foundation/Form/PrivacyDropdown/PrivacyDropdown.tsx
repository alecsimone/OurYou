import { useState } from 'react';
import Select from '@styles/extendableElements/Select';

interface PrivacyDropdownProps {
  initialValue: 'Private' | 'Friends' | 'FriendsOfFriends' | 'Public';
  selectPrivacy: (
    value: 'Private' | 'Friends' | 'FriendsOfFriends' | 'Public'
  ) => void;
}

const PrivacyDropdown = ({
  initialValue,
  selectPrivacy,
}: PrivacyDropdownProps): JSX.Element => {
  const [value, setValue] = useState(initialValue);

  return (
    <Select
      value={value}
      onChange={(e) => {
        if (
          e.target.value === 'Private' ||
          e.target.value === 'Friends' ||
          e.target.value === 'FriendsOfFriends' ||
          e.target.value === 'Public'
        ) {
          setValue(e.target.value);
          selectPrivacy(e.target.value);
        }
      }}
    >
      <option value="Private">Private</option>
      <option value="Friends">Friends</option>
      <option value="FriendsOfFriends">Friends of Friends</option>
      <option value="Public">Public</option>
    </Select>
  );
};

export default PrivacyDropdown;
