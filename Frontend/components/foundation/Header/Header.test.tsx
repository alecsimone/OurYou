import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import waitForQuery from 'utils/testing/waitForQuery';
import * as stories from './Header.stories';

const { Tablet } = composeStories(stories);

describe('Header', () => {
  it('shows and hides the search bar', async () => {
    const user = userEvent.setup();
    render(<Tablet />);

    await waitForQuery();

    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    const searchBar = screen.queryByPlaceholderText('Search');
    expect(searchBar).not.toBeInTheDocument();

    await user.click(searchIcon);
    const searchBarAfterClick = screen.queryByPlaceholderText('Search');

    await user.click(searchIcon);
    expect(searchBarAfterClick).not.toBeInTheDocument();
  });
});
