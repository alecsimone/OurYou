/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './Avatar';

export default {
  title: 'Member/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  avatar:
    'https://pbs.twimg.com/profile_images/917202644740956160/lMFbGZ-e_400x400.jpg',
};
