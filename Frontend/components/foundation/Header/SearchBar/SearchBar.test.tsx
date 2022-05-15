import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Providers from 'components/foundation/Providers';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Renders a search icon and a search bar', () => {
    render(
      <Providers>
        <SearchBar
          showingSearch
          toggleShowingSearch={() => {}}
        />
      </Providers>
    );

    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    const searchBar = screen.getByPlaceholderText('Search');
    expect(searchBar).toBeInTheDocument();
  });
});
