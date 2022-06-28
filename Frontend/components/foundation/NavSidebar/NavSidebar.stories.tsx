/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import NavSidebar from './NavSidebar';

export default {
  title: 'Foundation/Nav Sidebar',
  component: NavSidebar,
  decorators: [
    (Story) => (
      <MockedProvider>
        <Story />
      </MockedProvider>
    ),
  ],
} as ComponentMeta<typeof NavSidebar>;

const Template: ComponentStory<typeof NavSidebar> = (args) => (
  <NavSidebar {...args} />
);

export const Basic = Template.bind({});

export const Collapsed = Template.bind({});
Collapsed.play = async () => {
  const collapseButton = await screen.getByTitle('Collapse');
  await userEvent.click(collapseButton);
};
