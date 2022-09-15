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

export const Nested = Template.bind({});
Nested.args = {
  text: 'This text is plain, **But this text is bold, __this text is bold and underlined,__ then this text is just bold again,** and finally some more plain text.',
};

export const DoubleNested = Template.bind({});
DoubleNested.args = {
  text: 'This text is plain, **But this text is bold, __this text is bold and underlined, <style="color: green"> This text is bold, underlined, and green,</style>, just bold and underlined,__ then this text is just bold again,** and finally some more plain text.',
};

export const TripleNested = Template.bind({});
TripleNested.args = {
  text: 'This text is plain, **But this text is bold, __this text is bold and underlined, <style="color: green"> This text is bold, underlined, and green, //And this text is bold, underlined, green and italicized//, but now not italicized</style>, just bold and underlined,__ then this text is just bold again,** and finally some more plain text.',
};

export const Overlapping = Template.bind({});
Overlapping.args = {
  text: '**Bold**. And then some plain text. ** More bold, __Bold and underline,** Just Underline__ and then some text after',
};

export const OverlappingAndNested = Template.bind({});
OverlappingAndNested.args = {
  text: 'We start with plain text, **Then we have some bold text __with an underlined part__ and then //an italicized part** Which overlapped with the bold part but now is alone.// And now just plain text again.',
};
