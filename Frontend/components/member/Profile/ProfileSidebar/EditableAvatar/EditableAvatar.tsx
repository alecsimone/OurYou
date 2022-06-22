import Button from '@styles/extendableElements/Button';
import Avatar from 'components/member/Avatar';
import { useState } from 'react';
import useMemberData from 'utils/member/useMemberData';
import EditAvatarForm from './EditAvatarForm/EditAvatarForm';
import StyledEditableAvatar from './StyledEditableAvatar';

// interface EditableAvatarProps {}

const EditableAvatar = (): JSX.Element => {
  const { avatar } = useMemberData('id avatar');
  const [editingAvatar, setEditingAvatar] = useState(false);

  return (
    <StyledEditableAvatar className="editableAvatar">
      <Avatar
        avatar={avatar}
        key="editableAvatar"
      />
      {editingAvatar && <EditAvatarForm setEditingAvatar={setEditingAvatar} />}
      {!editingAvatar && (
        <Button
          className="changeAvatar"
          onClick={() => setEditingAvatar(true)}
        >
          Change Avatar
        </Button>
      )}
    </StyledEditableAvatar>
  );
};

export default EditableAvatar;
