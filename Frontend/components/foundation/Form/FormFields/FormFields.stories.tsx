import { ComponentStory, ComponentMeta } from '@storybook/react';
import StyledForm from '@styles/extendableElements/Form';
import ConfirmPasswordField from './ConfirmPasswordField';
import DisplayNameField from './DisplayNameField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

export default {
  title: 'Form/Form Fields',
  component: DisplayNameField,
} as ComponentMeta<typeof DisplayNameField>;

export const BlankDisplayName: ComponentStory<typeof DisplayNameField> = () => (
  <StyledForm>
    <DisplayNameField
      value=""
      onChange={() => {}}
    />
  </StyledForm>
);

export const ValidDisplayName: ComponentStory<typeof DisplayNameField> = () => (
  <StyledForm>
    <DisplayNameField
      value="Alec"
      onChange={() => {}}
    />
  </StyledForm>
);

export const InvalidDisplayName: ComponentStory<
  typeof DisplayNameField
> = () => (
  <StyledForm>
    <DisplayNameField
      value="Ab"
      onChange={() => {}}
    />
  </StyledForm>
);

export const BlankEmail: ComponentStory<typeof EmailField> = () => (
  <StyledForm>
    <EmailField
      value=""
      onChange={() => {}}
    />
  </StyledForm>
);

export const ValidEmail: ComponentStory<typeof EmailField> = () => (
  <StyledForm>
    <EmailField
      value="test@example.com"
      onChange={() => {}}
    />
  </StyledForm>
);

export const InvalidEmail: ComponentStory<typeof EmailField> = () => (
  <StyledForm>
    <EmailField
      value="Invalid"
      onChange={() => {}}
    />
  </StyledForm>
);

export const BlankPassword: ComponentStory<typeof PasswordField> = () => (
  <StyledForm>
    <PasswordField
      value=""
      onChange={() => {}}
    />
  </StyledForm>
);

export const ValidPassword: ComponentStory<typeof PasswordField> = () => (
  <StyledForm>
    <PasswordField
      value="123456789"
      onChange={() => {}}
    />
  </StyledForm>
);

export const InvalidPassword: ComponentStory<typeof PasswordField> = () => (
  <StyledForm>
    <PasswordField
      value="123"
      onChange={() => {}}
    />
  </StyledForm>
);

export const BlankConfirmPassword: ComponentStory<
  typeof ConfirmPasswordField
> = () => (
  <StyledForm>
    <ConfirmPasswordField
      value=""
      onChange={() => {}}
      firstPasswordEntry=""
    />
  </StyledForm>
);

export const ValidConfirmPassword: ComponentStory<
  typeof ConfirmPasswordField
> = () => (
  <StyledForm>
    <ConfirmPasswordField
      value="123456789"
      onChange={() => {}}
      firstPasswordEntry="123456789"
    />
  </StyledForm>
);

export const InvalidConfirmPassword: ComponentStory<
  typeof ConfirmPasswordField
> = () => (
  <StyledForm>
    <ConfirmPasswordField
      value="123"
      onChange={() => {}}
      firstPasswordEntry=""
    />
  </StyledForm>
);
