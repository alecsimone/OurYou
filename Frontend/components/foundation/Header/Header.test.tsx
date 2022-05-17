import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Providers from '../Providers';
import Header from './Header';

describe('Header', () => {
  it('shows and hides the search bar', async () => {
    const user = userEvent.setup();
    render(
      <Providers>
        <Header
          toggleNavSidebar={() => {}}
          toggleThingsSidebar={() => {}}
        />
      </Providers>
    );

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
