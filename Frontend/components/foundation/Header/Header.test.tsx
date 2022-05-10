import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import theme from '../../../styles/theme';
import Header from './Header';

describe('Header', () => {
  it('Shows and hides the search bar', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    const searchBar = screen.queryByPlaceholderText('Search');
    expect(searchBar).not.toBeInTheDocument();

    await user.click(searchIcon);
    const searchBarAfterOneClick = screen.queryByPlaceholderText('Search');
    expect(searchBarAfterOneClick).toBeInTheDocument();

    await user.click(searchIcon);
    const searchBarAfterTwoClicks = screen.queryByPlaceholderText('Search');
    expect(searchBarAfterTwoClicks).not.toBeInTheDocument();
  });
});
