/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PrivacyDropdown from './PrivacyDropdown';

export default {
  title: 'Form/Privacy Dropdown',
  component: PrivacyDropdown,
} as ComponentMeta<typeof PrivacyDropdown>;

const Template: ComponentStory<typeof PrivacyDropdown> = (args) => (
  <PrivacyDropdown {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  initialValue: 'Private',
};
