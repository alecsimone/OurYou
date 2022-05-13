import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import Header from './Header';

describe('Header', () => {
  it('Shows and hides the search bar', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <Header
          toggleNavSidebar={() => {}}
          toggleThingsSidebar={() => {}}
        />
      </ThemeProvider>
    );

    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    const searchBar = screen.queryByPlaceholderText('Search');
    expect(searchBar).not.toBeInTheDocument();

    await user.click(searchIcon);
    const searchBarAfterClick = screen.queryByPlaceholderText('Search');
    expect(searchBarAfterClick).toBeInTheDocument();

    await user.click(searchIcon);
    expect(searchBarAfterClick).not.toBeInTheDocument();
  });
});
