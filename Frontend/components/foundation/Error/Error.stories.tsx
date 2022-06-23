/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Error from './Error';

const errorString = 'Something went terribly wrong!';

export default {
  title: 'Foundation/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  error: {
    message: errorString,
  },
};

export const FromString = Template.bind({});
FromString.args = {
  error: errorString,
};

export const Blank = Template.bind({});
Blank.args = {};
