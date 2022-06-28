/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import mockRouter from 'next-router-mock';
import ThingsSidebar from './ThingsSidebar';

export default {
  title: 'Foundation/Things Sidebar',
  component: ThingsSidebar,
} as ComponentMeta<typeof ThingsSidebar>;

const Template: ComponentStory<typeof ThingsSidebar> = (args) => (
  <ThingsSidebar {...args} />
);

export const Basic = Template.bind({});
Basic.decorators = [
  (Story) => {
    mockRouter.pathname = '/';
    return (
      <MockedProvider>
        <RouterContext.Provider value={mockRouter}>
          <Story />
        </RouterContext.Provider>
      </MockedProvider>
    );
  },
];

export const NotHome = Template.bind({});
NotHome.decorators = [
  (Story) => {
    mockRouter.pathname = '/twitter';
    return (
      <MockedProvider>
        <RouterContext.Provider value={mockRouter}>
          <Story />
        </RouterContext.Provider>
      </MockedProvider>
    );
  },
];
