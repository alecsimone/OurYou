import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../styles/theme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Renders a search icon and a search bar', () => {
    render(
      <ThemeProvider theme={theme}>
        <SearchBar
          showingSearch={true}
          toggleShowingSearch={() => {}}
        />
      </ThemeProvider>
    );

    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    const searchBar = screen.getByPlaceholderText('Search');
    expect(searchBar).toBeInTheDocument();
  });
});
