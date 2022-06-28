/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { duplicateSignUpMock, validSignUpMock } from './mutationMocks';

import SignUp from './SignUp';

export default {
  title: 'Member/Sign Up',
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;

export const Basic = Template.bind({});
Basic.decorators = [
  (Story) => (
    <MockedProvider>
      <Story />
    </MockedProvider>
  ),
];

const necessaryFormFields = [
  'Display Name',
  'Email',
  'Password',
  'Confirm Password',
];

export const WithValidInputs = Template.bind({});
WithValidInputs.play = async () => {
  const [displayNameInput, emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(displayNameInput, 'Example Name');
  await userEvent.type(emailInput, 'test@example.com');
  await userEvent.type(passwordInput, '123456789');
  await userEvent.type(confirmPasswordInput, '123456789');

  confirmPasswordInput.blur();
};

export const WithInvalidInputs = Template.bind({});
WithInvalidInputs.play = async () => {
  const [displayNameInput, emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(displayNameInput, 'Ab');
  await userEvent.type(emailInput, 'invalid');
  await userEvent.type(passwordInput, '1234');
  await userEvent.type(confirmPasswordInput, '123');

  confirmPasswordInput.blur();
};

export const ValidSignUp = Template.bind({});
ValidSignUp.play = async () => {
  const [displayNameInput, emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(displayNameInput, 'Alec');

  await userEvent.type(emailInput, 'test@example.com');

  await userEvent.type(passwordInput, '123456789');

  await userEvent.type(confirmPasswordInput, '123456789');

  confirmPasswordInput.blur();
};
ValidSignUp.decorators = [
  (Story) => (
    <MockedProvider mocks={validSignUpMock}>
      <RouterContext.Provider value={mockRouter}>
        <Story />
      </RouterContext.Provider>
    </MockedProvider>
  ),
];

export const DuplicateSignUp = Template.bind({});
DuplicateSignUp.play = async () => {
  const [displayNameInput, emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(displayNameInput, 'Alec');

  await userEvent.type(emailInput, 'test@example.com');

  await userEvent.type(passwordInput, '123456789');

  await userEvent.type(confirmPasswordInput, '123456789');

  confirmPasswordInput.blur();
};
DuplicateSignUp.decorators = [
  (Story) => (
    <MockedProvider mocks={duplicateSignUpMock}>
      <Story />
    </MockedProvider>
  ),
];
