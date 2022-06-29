/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import EditableAvatar from './EditableAvatar';
import { avatarMock, mutationSuccessMock } from './queryMocks';

export default {
  title: 'Member/Profile/Profile Sidebar/Editable Avatar',
  component: EditableAvatar,
} as ComponentMeta<typeof EditableAvatar>;

const Template: ComponentStory<typeof EditableAvatar> = () => (
  <EditableAvatar />
);

export const Basic = Template.bind({});

export const ShowingForm = Template.bind({});
ShowingForm.play = async () => {
  const changeButton = screen.getByText('Change Avatar');
  await userEvent.click(changeButton);
};

const combinedMocks = [...avatarMock, ...mutationSuccessMock];

export const WithAvatar = Template.bind({});
WithAvatar.decorators = [
  (Story) => (
    <MockedProvider mocks={combinedMocks}>
      <Story />
    </MockedProvider>
  ),
];
