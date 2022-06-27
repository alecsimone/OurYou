/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import BottomBar from './BottomBar';

export default {
  title: 'Foundation/Bottom Bar',
  component: BottomBar,
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
    backgrounds: {
      default: 'lightBlack',
    },
  },
} as ComponentMeta<typeof BottomBar>;

const Template: ComponentStory<typeof BottomBar> = () => (
  <div style={{ width: '80vw' }}>
    <BottomBar />
  </div>
);

export const Basic = Template.bind({});

export const ShowingSearch = Template.bind({});
ShowingSearch.play = async () => {
  const searchButton = await screen.getByTitle('Search');
  await userEvent.click(searchButton);
};

export const ShowingSearchWithText = Template.bind({});
ShowingSearchWithText.play = async () => {
  const searchButton = await screen.getByTitle('Search');
  await userEvent.click(searchButton);

  const input = screen.getByPlaceholderText('Search');
  await userEvent.type(input, 'Search String');
};

export const ShowingNewThing = Template.bind({});
ShowingNewThing.play = async () => {
  const newThingButton = await screen.getByTitle('New');
  await userEvent.click(newThingButton);
};

export const ShowingNewThingWithText = Template.bind({});
ShowingNewThingWithText.play = async () => {
  const newThingButton = await screen.getByTitle('New');
  await userEvent.click(newThingButton);

  const input = screen.getByPlaceholderText('Thing Title');
  await userEvent.type(input, 'New Thing Title');
};
