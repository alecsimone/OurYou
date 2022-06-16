import { useState, Dispatch, SetStateAction } from 'react';
import { gql, useMutation } from '@apollo/client';
import useForm from 'components/foundation/Form/useForm';
import useMemberData from 'utils/member/useMemberData';
import FormField from 'components/foundation/Form/FormField';
import FileUploadInput from 'components/foundation/Form/FileUploadInput';
import Error from 'components/foundation/Error';

const SET_AVATAR_MUTATION = gql`
  mutation SET_AVATAR_MUTATION(
    $newAvatarLink: String
    $uploadedAvatar: [Upload]
  ) {
    setAvatar(newAvatarLink: $newAvatarLink, uploadedAvatar: $uploadedAvatar) {
      __typename
      id
      avatar
    }
  }
`;
export { SET_AVATAR_MUTATION };

interface avatarStateInterface {
  newAvatarLink: string;
  uploadedAvatar: File[] | null;
}

interface setAvatarResponse {
  setAvatar: {
    __typename: 'Member';
    id: string;
    avatar?: string;
  };
}

const initialState: avatarStateInterface = {
  newAvatarLink: '',
  uploadedAvatar: null,
};

const useEditableAvatar = (): [
  JSX.Element,
  string,
  boolean,
  Dispatch<SetStateAction<boolean>>
] => {
  const { id, avatar } = useMemberData('id avatar');
  const [editingAvatar, setEditingAvatar] = useState(false);

  const optimisticResponse: setAvatarResponse = {
    setAvatar: {
      __typename: 'Member',
      id,
    },
  };

  const [setAvatar] = useMutation(SET_AVATAR_MUTATION, {
    optimisticResponse,
    onCompleted: () => {
      setEditingAvatar(false);
    },
  });

  // Get our form pieces
  const [formState, handleFormUpdate, formCreator] =
    useForm<avatarStateInterface>(
      initialState,
      setAvatar,
      undefined,
      undefined,
      () => setEditingAvatar(false)
    );

  optimisticResponse.setAvatar.avatar = formState.newAvatarLink;

  // Create our form fields
  const uploadInput = (
    <FileUploadInput
      labelText={
        formState.uploadedAvatar == null ? 'Upload Image' : 'Change Upload'
      }
      name="uploadedAvatar"
      files={formState.uploadedAvatar}
      handleChange={handleFormUpdate}
      key="upload"
    />
  );

  const linkInput = (
    <FormField
      fieldType="input"
      requirements="Must be a valid URL that is not the same as your current avatar."
      fieldProps={{
        type: 'url',
        name: 'newAvatarLink',
        placeholder: 'Link to image',
        value: formState.newAvatarLink,
        onChange: handleFormUpdate,
        pattern: `(?!${avatar}$).*`,
      }}
      key="link"
    />
  );

  let error = null;
  if (formState.newAvatarLink !== '' && formState.uploadedAvatar !== null) {
    error = {
      message:
        'You have both entered a link and uploaded a file, please enter only one',
    };
  }
  // if (formState.newAvatarLink === avatar) {
  //   error = {
  //     message: 'That image is already your avatar.',
  //   };
  // }

  const form = (
    <div className="editAvatarWrapper">
      <Error error={error} />
      {formCreator([uploadInput, linkInput])}
    </div>
  );
  return [form, avatar, editingAvatar, setEditingAvatar];
};

export default useEditableAvatar;
