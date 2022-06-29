/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileSidebar from './ProfileSidebar';
import { validProfileSidebarMock } from './queryMocks';

export default {
  title: 'Member/Profile/Profile Sidebar',
  component: ProfileSidebar,
} as ComponentMeta<typeof ProfileSidebar>;

const Template: ComponentStory<typeof ProfileSidebar> = (args) => (
  <ProfileSidebar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  memberID: '123',
};
Basic.decorators = [
  (Story) => (
    <MockedProvider mocks={validProfileSidebarMock}>
      <Story />
    </MockedProvider>
  ),
];
