import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockProviders from 'components/foundation/MockProviders';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders a search icon and a search bar', () => {
    render(
      <MockProviders>
        <SearchBar
          showingSearch
          toggleShowingSearch={() => {}}
        />
      </MockProviders>
    );
    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    const searchBar = screen.getByPlaceholderText('Search');
    expect(searchBar).toBeInTheDocument();
  });

  it('only shows the search bar when the showingSearch prop is present', () => {
    render(
      <MockProviders>
        <SearchBar
          showingSearch={false}
          toggleShowingSearch={() => {}}
        />
      </MockProviders>
    );
    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    const searchBar = screen.queryByPlaceholderText('Search');
    expect(searchBar).not.toBeInTheDocument();
  });

  it('calls toggle showing search when the search icon is clicked', async () => {
    const user = userEvent.setup();
    const toggleShowingSearch = jest.fn();
    render(
      <MockProviders>
        <SearchBar
          showingSearch
          toggleShowingSearch={toggleShowingSearch}
        />
      </MockProviders>
    );
    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    await user.click(searchIcon);
    expect(toggleShowingSearch).toBeCalled();

    const icon = searchIcon.closest('svg');
    icon?.focus();

    await user.keyboard('{Enter}');
    expect(toggleShowingSearch).toBeCalledTimes(2);

    await user.keyboard(' ');
    expect(toggleShowingSearch).toBeCalledTimes(3);
  });

  it('lets you type in the search box', async () => {
    const user = userEvent.setup();
    const toggleShowingSearch = jest.fn();
    render(
      <MockProviders>
        <SearchBar
          showingSearch
          toggleShowingSearch={toggleShowingSearch}
        />
      </MockProviders>
    );
    const searchBar = screen.getByPlaceholderText('Search');
    expect(searchBar).toBeInTheDocument();

    const searchString = 'abc123def';
    await user.type(searchBar, searchString);
    expect(searchBar).toHaveValue(searchString);
  });
});
