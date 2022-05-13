import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import NavSidebar, { navLinks } from './NavSidebar';

describe('NavSidebar', () => {
  it('Renders the nav links', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavSidebar isOpen={true} />
      </ThemeProvider>
    );

    navLinks.forEach((linkObj) => {
      const navLine = screen.getByText(linkObj.text, {
        selector: 'span.navLabel',
      });
      expect(navLine).toBeInTheDocument();
    });
  });
});
