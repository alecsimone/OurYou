/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import SearchBar from './SearchBar';

export default {
  title: 'Foundation/Header/Search Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Basic = Template.bind({});

export const ShowingSearch = Template.bind({});
ShowingSearch.args = {
  showingSearch: true,
};

export const WithText = Template.bind({});
WithText.args = {
  showingSearch: true,
};
WithText.play = async () => {
  const input = await screen.getByPlaceholderText('Search');
  await userEvent.type(input, 'Search String');
};
