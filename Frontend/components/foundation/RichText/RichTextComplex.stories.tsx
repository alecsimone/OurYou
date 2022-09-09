/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RichText from './RichText';

export default {
  title: 'Rich Text/Complex',
  component: RichText,
} as ComponentMeta<typeof RichText>;

const Template: ComponentStory<typeof RichText> = (args) => (
  <RichText {...args} />
);

export const Overlapping = Template.bind({});
Overlapping.args = {
  text: '**Bold**. And then some plain text. ** More bold, __Bold and underline,** Just Underline__ and then some text after',
};
