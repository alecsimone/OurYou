import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import theme from '../../../../styles/theme';
import NavButtons from './NavButtons';

const setWidth = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

describe('NavButtons', () => {
  it('Renders a hamburger, plus, search icon, and search bar', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavButtons showingSearch={true} setShowingSearch={() => {}} />
      </ThemeProvider>
    );

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    expect(hamburger).toBeInTheDocument();

    const plus = screen.getByTitle('New Post');
    expect(plus).toBeInTheDocument();

    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    const searchBar = screen.getByPlaceholderText('Search');
    expect(searchBar).toBeInTheDocument();
  });
});
