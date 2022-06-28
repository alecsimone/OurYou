/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Foundation/Modal',
  component: Modal,
  args: {
    children: <div>The Modal Component</div>,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const { children } = args;

  return <Modal {...args}>{children}</Modal>;
};

export const Basic = Template.bind({});
