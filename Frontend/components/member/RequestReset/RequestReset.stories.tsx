/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import validResetMock from './mutationMocks';

import RequestReset from './RequestReset';

export default {
  title: 'Member/Request Reset',
  component: RequestReset,
} as ComponentMeta<typeof RequestReset>;

const Template: ComponentStory<typeof RequestReset> = () => <RequestReset />;

export const Basic = Template.bind({});
Basic.decorators = [
  (Story) => (
    <MockedProvider>
      <Story />
    </MockedProvider>
  ),
];

export const WithValidInput = Template.bind({});
WithValidInput.play = async () => {
  const emailInput = screen.getByPlaceholderText('Email');

  await userEvent.type(emailInput, 'test@example.com');
  emailInput.blur();
};
WithValidInput.decorators = [
  (Story) => (
    <MockedProvider>
      <Story />
    </MockedProvider>
  ),
];

export const WithInvalidInput = Template.bind({});
WithInvalidInput.play = async () => {
  const emailInput = screen.getByPlaceholderText('Email');

  await userEvent.type(emailInput, 'invalid');
  emailInput.blur();
};
WithInvalidInput.decorators = [
  (Story) => (
    <MockedProvider>
      <Story />
    </MockedProvider>
  ),
];

export const ResetRequested = Template.bind({});
ResetRequested.play = async () => {
  const emailInput = screen.getByPlaceholderText('Email');

  await userEvent.type(emailInput, 'test@example.com');
  emailInput.blur();
};
ResetRequested.decorators = [
  (Story) => (
    <MockedProvider mocks={validResetMock}>
      <Story />
    </MockedProvider>
  ),
];
