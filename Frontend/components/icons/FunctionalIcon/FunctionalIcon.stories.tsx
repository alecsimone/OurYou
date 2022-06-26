/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomeIcon from '@icons/Home';
import FunctionalIcon from './FunctionalIcon';

export default {
  title: 'Icons/Functional Icon',
  component: FunctionalIcon,
} as ComponentMeta<typeof FunctionalIcon>;

const Template: ComponentStory<typeof FunctionalIcon> = (args) => (
  <FunctionalIcon {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  iconName: 'iconNameTest',
  children: <HomeIcon />,
};

export const TitleTextReplacement = Template.bind({});
TitleTextReplacement.args = {
  iconName: 'iconNameTest',
  titleTextReplacement: 'Something Else',
  children: <HomeIcon />,
};

export const ExtraClass = Template.bind({});
ExtraClass.args = {
  iconName: 'iconNameTest',
  extraClass: 'extraClassTest',
  children: <HomeIcon />,
};
