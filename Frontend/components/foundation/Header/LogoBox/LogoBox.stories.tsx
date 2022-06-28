/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoBox from './LogoBox';

export default {
  title: 'Foundation/Header/Logo Box',
  component: LogoBox,
} as ComponentMeta<typeof LogoBox>;

const Template: ComponentStory<typeof LogoBox> = (args) => (
  <LogoBox {...args} />
);

export const Basic = Template.bind({});

export const NoName = Template.bind({});
NoName.parameters = {
  viewport: {
    defaultViewport: 'mobile',
  },
};
