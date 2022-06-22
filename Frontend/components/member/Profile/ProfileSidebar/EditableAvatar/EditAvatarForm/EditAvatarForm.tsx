import useEditableAvatar from './useEditAvatarForm';

interface EditAvatarFormProps {
  setEditingAvatar: (value: boolean) => void;
}

const EditAvatarForm = ({
  setEditingAvatar,
}: EditAvatarFormProps): JSX.Element => {
  const form = useEditableAvatar(setEditingAvatar);
  return form;
};

export default EditAvatarForm;
