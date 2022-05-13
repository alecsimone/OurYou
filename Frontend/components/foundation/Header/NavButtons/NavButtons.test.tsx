import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../styles/theme';
import NavButtons from './NavButtons';

describe('NavButtons', () => {
  it('Renders a hamburger icon and a plus icon', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavButtons toggleNavSidebar={() => {}} />
      </ThemeProvider>
    );

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    expect(hamburger).toBeInTheDocument();

    const plus = screen.getByTitle('New Post');
    expect(plus).toBeInTheDocument();
  });
});
