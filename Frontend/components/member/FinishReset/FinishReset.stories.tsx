/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';

import FinishReset from './FinishReset';
import {
  expiredResetMock,
  failedResetMock,
  redeemedResetMock,
  validResetMock,
} from './mutationMocks';

export default {
  title: 'Member/Finish Reset',
  component: FinishReset,
  parameters: {
    nextRouter: {
      query: {
        code: 'test',
      },
    },
  },
} as ComponentMeta<typeof FinishReset>;

const Template: ComponentStory<typeof FinishReset> = () => <FinishReset />;

export const Basic = Template.bind({});
Basic.decorators = [
  (Story) => (
    <MockedProvider>
      <Story />
    </MockedProvider>
  ),
];

const necessaryFormFields = ['Email', 'Password', 'Confirm Password'];

export const WithValidInputs = Template.bind({});
WithValidInputs.play = async () => {
  const [emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(emailInput, 'test@example.com');

  await userEvent.type(passwordInput, '123456789');

  await userEvent.type(confirmPasswordInput, '123456789');

  confirmPasswordInput.blur();
};

export const WithInvalidInputs = Template.bind({});
WithInvalidInputs.play = async () => {
  const [emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(emailInput, 'Invalid');

  await userEvent.type(passwordInput, '1234');

  await userEvent.type(confirmPasswordInput, '12345');

  confirmPasswordInput.blur();
};

export const SuccessfulReset = Template.bind({});
SuccessfulReset.decorators = [
  (Story) => (
    <MockedProvider mocks={validResetMock}>
      <Story />
    </MockedProvider>
  ),
];
SuccessfulReset.play = async () => {
  const [emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(emailInput, 'test@example.com');

  await userEvent.type(passwordInput, '123456789');

  await userEvent.type(confirmPasswordInput, '123456789');

  confirmPasswordInput.blur();
};

export const FailedReset = Template.bind({});
FailedReset.decorators = [
  (Story) => (
    <MockedProvider mocks={failedResetMock}>
      <Story />
    </MockedProvider>
  ),
];
FailedReset.play = async () => {
  const [emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(emailInput, 'test@example.com');

  await userEvent.type(passwordInput, '123456789');

  await userEvent.type(confirmPasswordInput, '123456789');

  confirmPasswordInput.blur();
};

export const ExpiredToken = Template.bind({});
ExpiredToken.decorators = [
  (Story) => (
    <MockedProvider mocks={expiredResetMock}>
      <Story />
    </MockedProvider>
  ),
];
ExpiredToken.play = async () => {
  const [emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(emailInput, 'test@example.com');

  await userEvent.type(passwordInput, '123456789');

  await userEvent.type(confirmPasswordInput, '123456789');

  confirmPasswordInput.blur();
};

export const AlreadyRedeemedToken = Template.bind({});
AlreadyRedeemedToken.decorators = [
  (Story) => (
    <MockedProvider mocks={redeemedResetMock}>
      <Story />
    </MockedProvider>
  ),
];
AlreadyRedeemedToken.play = async () => {
  const [emailInput, passwordInput, confirmPasswordInput] =
    necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

  await userEvent.type(emailInput, 'test@example.com');

  await userEvent.type(passwordInput, '123456789');

  await userEvent.type(confirmPasswordInput, '123456789');

  confirmPasswordInput.blur();
};
