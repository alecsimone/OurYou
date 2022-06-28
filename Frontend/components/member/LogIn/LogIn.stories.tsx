/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';

import LogIn from './LogIn';
import { invalidLoginMock, validLoginMock } from './mutationMocks';

export default {
  title: 'Member/Log In',
  component: LogIn,
} as ComponentMeta<typeof LogIn>;

const Template: ComponentStory<typeof LogIn> = () => <LogIn />;

export const Basic = Template.bind({});
Basic.decorators = [
  (Story) => (
    <MockedProvider>
      <Story />
    </MockedProvider>
  ),
];

export const WithValidInputs = Template.bind({});
WithValidInputs.play = async () => {
  const emailInput = await screen.getByPlaceholderText('Email');
  await userEvent.type(emailInput, 'test@example.com');

  const passwordInput = await screen.getByPlaceholderText('Password');
  await userEvent.type(passwordInput, '123456789');

  passwordInput.blur();
};

export const WithInvalidInputs = Template.bind({});
WithInvalidInputs.decorators = [
  (Story) => (
    <MockedProvider>
      <Story />
    </MockedProvider>
  ),
];
WithInvalidInputs.play = async () => {
  const emailInput = await screen.getByPlaceholderText('Email');
  await userEvent.type(emailInput, 'invalid');

  const passwordInput = await screen.getByPlaceholderText('Password');
  await userEvent.type(passwordInput, '123');

  passwordInput.blur();
};

export const InvalidLogIn = Template.bind({});
InvalidLogIn.play = async () => {
  const emailInput = await screen.getByPlaceholderText('Email');
  await userEvent.type(emailInput, 'test@example.com');

  const passwordInput = await screen.getByPlaceholderText('Password');
  await userEvent.type(passwordInput, '123456789');

  passwordInput.blur();
};
InvalidLogIn.decorators = [
  (Story) => (
    <MockedProvider mocks={invalidLoginMock}>
      <Story />
    </MockedProvider>
  ),
];

export const ValidLogIn = Template.bind({});
ValidLogIn.play = async () => {
  const emailInput = await screen.getByPlaceholderText('Email');
  await userEvent.type(emailInput, 'test@example.com');

  const passwordInput = await screen.getByPlaceholderText('Password');
  await userEvent.type(passwordInput, '123456789');

  passwordInput.blur();
};
ValidLogIn.decorators = [
  (Story) => (
    <MockedProvider mocks={validLoginMock}>
      <Story />
    </MockedProvider>
  ),
];
