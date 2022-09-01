/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RichText from './RichText';

export default {
  title: 'Foundation/Rich Text',
  component: RichText,
} as ComponentMeta<typeof RichText>;

const Template: ComponentStory<typeof RichText> = (args) => (
  <RichText {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  text: 'This is some text.',
};
