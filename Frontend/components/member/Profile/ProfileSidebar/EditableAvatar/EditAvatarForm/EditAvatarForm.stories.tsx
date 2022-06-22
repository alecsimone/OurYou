import { ComponentStory, ComponentMeta } from '@storybook/react';
import StyledForm from '@styles/extendableElements/Form';
import FormField from 'components/foundation/Form/FormField';
import StyledEditableAvatar from '../StyledEditableAvatar';
import EditAvatarForm from './EditAvatarForm';

export default {
  title: 'Member/Profile/Profile Sidebar/Edit Avatar Form',
  component: EditAvatarForm,
} as ComponentMeta<typeof EditAvatarForm>;

export const Basic: ComponentStory<typeof EditAvatarForm> = () => (
  <StyledEditableAvatar>
    <EditAvatarForm setEditingAvatar={() => {}} />
  </StyledEditableAvatar>
);

export const ValidFormField: ComponentStory<typeof FormField> = () => (
  <StyledForm className="editableAvatar">
    <FormField
      fieldType="input"
      requirements="Must be a valid URL that is not the same as your current avatar."
      fieldProps={{
        type: 'url',
        name: 'newAvatarLink',
        placeholder: 'Link to image',
        value: 'https://www.reddit.com',
        onChange: () => {},
        pattern: '(?!avatar$).*',
      }}
      key="link"
    />
  </StyledForm>
);

export const InvalidFormField: ComponentStory<typeof FormField> = () => (
  <StyledForm className="editableAvatar">
    <FormField
      fieldType="input"
      requirements="Must be a valid URL that is not the same as your current avatar."
      fieldProps={{
        type: 'url',
        name: 'newAvatarLink',
        placeholder: 'Link to image',
        value: 'abc',
        onChange: () => {},
        pattern: '(?!avatar$).*',
      }}
      key="link"
    />
  </StyledForm>
);
