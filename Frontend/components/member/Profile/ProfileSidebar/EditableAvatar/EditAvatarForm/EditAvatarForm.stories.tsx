/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import { avatarMock, mutationErrorMock } from '../queryMocks';
import StyledEditableAvatar from '../StyledEditableAvatar';
import EditAvatarForm from './EditAvatarForm';

export default {
  title: 'Member/Profile/ProfileSidebar/Editable Avatar/Edit Avatar Form',
  component: EditAvatarForm,
} as ComponentMeta<typeof EditAvatarForm>;

const Template: ComponentStory<typeof EditAvatarForm> = (args) => (
  <StyledEditableAvatar>
    <EditAvatarForm {...args} />
  </StyledEditableAvatar>
);

const combinedMocks = [...avatarMock, ...mutationErrorMock];

export const Basic = Template.bind({});
Basic.decorators = [
  (Story) => (
    <MockedProvider mocks={combinedMocks}>
      <Story />
    </MockedProvider>
  ),
];

export const WithLink = Template.bind({});
WithLink.play = async () => {
  const linkInput = await screen.getByPlaceholderText('Link to image');

  await userEvent.type(linkInput, 'https://www.reddit.com/someImage.jpg');

  linkInput.blur();
};

export const WithFile = Template.bind({});
WithFile.play = async () => {
  const uploadButton = screen.getByText('Upload Image');
  const str = JSON.stringify({
    name: 'test.jpg',
    size: 100,
  });
  const blob = new Blob([str]);
  const file = new File([blob], 'test.jpg', {
    type: 'image/jpg',
  });

  await userEvent.upload(uploadButton, file);
};
