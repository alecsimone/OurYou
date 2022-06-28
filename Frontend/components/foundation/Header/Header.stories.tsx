/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import initialMemberMock from 'utils/testing/initialMemberMock';
import Header from './Header';
import { loggedOutMock } from './MemberBox/queryMocks';

export default {
  title: 'Foundation/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

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

export const Mobile = Template.bind({});
Mobile.decorators = [
  (Story) => (
    <MockedProvider mocks={initialMemberMock}>
      <Story />
    </MockedProvider>
  ),
];
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile',
  },
};

export const Tablet = Template.bind({});
Tablet.decorators = [
  (Story) => (
    <MockedProvider mocks={initialMemberMock}>
      <Story />
    </MockedProvider>
  ),
];
Tablet.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};
