/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavButtons from './NavButtons';

export default {
  title: 'Foundation/Header/Nav Buttons',
  component: NavButtons,
} as ComponentMeta<typeof NavButtons>;

const Template: ComponentStory<typeof NavButtons> = (args) => (
  <NavButtons {...args} />
);

export const Basic = Template.bind({});

export const WithHamburger = Template.bind({});
WithHamburger.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};
