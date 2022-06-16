import Button from '@styles/extendableElements/Button';
import Avatar from 'components/member/Avatar';
import StyledEditableAvatar from './StyledEditableAvatar';
import useEditableAvatar from './useEditableAvatar';

// interface EditableAvatarProps {}

const EditableAvatar = (): JSX.Element => {
  const [form, avatar, editingAvatar, setEditingAvatar] = useEditableAvatar();

  return (
    <StyledEditableAvatar className="editableAvatar">
      <Avatar
        avatar={avatar}
        key="editableAvatar"
      />
      {editingAvatar && form}
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
