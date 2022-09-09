/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RichText from './RichText';

export default {
  title: 'Rich Text/Simple',
  component: RichText,
} as ComponentMeta<typeof RichText>;

const Template: ComponentStory<typeof RichText> = (args) => (
  <RichText {...args} />
);

export const NoMatches = Template.bind({});
NoMatches.args = {
  text: 'This is some plain text.',
};

export const Stars = Template.bind({});
Stars.args = {
  text: "**This text should be bold,** but this text shouldn't",
};

export const Bars = Template.bind({});
Bars.args = {
  text: "__This text should be underlined,__ but this text shouldn't",
};

export const Pounds = Template.bind({});
Pounds.args = {
  text: '##This text should be a header.##',
};

export const RawStyle = Template.bind({});
RawStyle.args = {
  text: '<style="color: green; fontWeight: bold">This text should be bold and green,</style> but this text shouldn\'t',
};

export const Code = Template.bind({});
Code.args = {
  text: "Here is a code block <code lang='js'>console.log('hello world!');</code>",
};

export const BlockQuote = Template.bind({});
BlockQuote.args = {
  text: 'This is some text that is not a quote <"And this is some text that is">',
};

export const Summary = Template.bind({});
Summary.args = {
  text: 'This is some normal text. >>This is text that is summarized<<(And this is the summary) And then here is some more text for after',
};

export const TwitterMention = Template.bind({});
TwitterMention.args = {
  text: "Let's mention @alecsimone on twitter!",
};

export const Email = Template.bind({});
Email.args = {
  text: 'Send an email to alecsimone@gmail.com if you want to be ignored!',
};

export const URL = Template.bind({});
URL.args = {
  text: 'This is a link to https://ouryou.org and I hope you click it.',
};
