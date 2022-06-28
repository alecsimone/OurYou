/* eslint-disable react/jsx-props-no-spreading */
import { MockedProvider } from '@apollo/client/testing';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import mockRouter from 'next-router-mock';
import initialMemberMock from 'utils/testing/initialMemberMock';
import Layout from './Layout';

export default {
  title: 'Foundation/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = ({ children }) => (
  <Layout>{children}</Layout>
);

export const Home = Template.bind({});
Home.args = {
  children: <div style={{ height: '80vh' }}>Home Page</div>,
};
Home.decorators = [
  (Story) => {
    mockRouter.pathname = '/';

    return (
      <MockedProvider mocks={initialMemberMock}>
        <RouterContext.Provider value={mockRouter}>
          <Story />
        </RouterContext.Provider>
      </MockedProvider>
    );
  },
];

export const NotHome = Template.bind({});
NotHome.args = {
  children: <div style={{ height: '80vh' }}>Not the Home Page</div>,
};
NotHome.decorators = [
  (Story) => {
    mockRouter.pathname = '/twitter';

    return (
      <MockedProvider mocks={initialMemberMock}>
        <RouterContext.Provider value={mockRouter}>
          <Story />
        </RouterContext.Provider>
      </MockedProvider>
    );
  },
];
