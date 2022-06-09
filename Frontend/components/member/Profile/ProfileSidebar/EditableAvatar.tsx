// interface EditableAvatarProps {}

import Button from '@styles/extendableElements/Button';
import Avatar from 'components/member/Avatar';

const EditableAvatar = (): JSX.Element => (
  <div className="editableAvatar">
    <Avatar />
    <Button className="changeAvatar">Change Avatar</Button>
  </div>
);

export default EditableAvatar;
