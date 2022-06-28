/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import initialMemberMock from 'utils/testing/initialMemberMock';
import { avatarlessMemberMock, delayedMock, loggedOutMock } from './queryMocks';
import MemberBox from './MemberBox';

export default {
  title: 'Foundation/Header/Member Box',
  component: MemberBox,
} as ComponentMeta<typeof MemberBox>;

const Template: ComponentStory<typeof MemberBox> = (args) => (
  <MemberBox {...args} />
);

export const Loading = Template.bind({});
Loading.decorators = [
  (Story) => (
    <MockedProvider mocks={delayedMock}>
      <Story />
    </MockedProvider>
  ),
];

export const LoggedOut = Template.bind({});
LoggedOut.decorators = [
  (Story) => (
    <MockedProvider mocks={loggedOutMock}>
      <Story />
    </MockedProvider>
  ),
];

export const LoggedIn = Template.bind({});
LoggedIn.decorators = [
  (Story) => (
    <MockedProvider mocks={initialMemberMock}>
      <Story />
    </MockedProvider>
  ),
];

export const LoggedInNoAvatar = Template.bind({});
LoggedInNoAvatar.decorators = [
  (Story) => (
    <MockedProvider mocks={avatarlessMemberMock}>
      <Story />
    </MockedProvider>
  ),
];
