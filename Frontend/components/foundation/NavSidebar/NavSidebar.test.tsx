import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import NavSidebar, { navLinks } from './NavSidebar';

describe('NavSidebar', () => {
  it('Renders the nav links', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavSidebar isOpen />
      </ThemeProvider>
    );

    navLinks.forEach((linkObj) => {
      const navLine = screen.getByText(linkObj.text, {
        selector: 'span.navLabel',
      });
      expect(navLine).toBeInTheDocument();
    });
  });

  it('Collapses and Expands', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <NavSidebar isOpen />
      </ThemeProvider>
    );

    // The Nav Sidebar should start expanded
    const navSidebar = screen.getByTestId('navSidebar');
    expect(navSidebar).toBeInTheDocument();
    expect(navSidebar).toHaveClass('expanded');

    const collapseButton = screen.getByTitle(/collapse/i);
    expect(collapseButton).toBeInTheDocument();

    // Clicking the collapse button should collapse it
    await user.click(collapseButton);
    expect(navSidebar).toHaveClass('collapsed');

    // While collapsed, the navLabels should not show up
    navLinks.forEach((linkObj) => {
      const navLine = screen.queryByText(linkObj.text, {
        selector: 'span.navLabel',
      });
      expect(navLine).not.toBeInTheDocument();
    });

    // Clicking the collapse button again should expand it
    await user.click(collapseButton);
    expect(navSidebar).toHaveClass('expanded');
  });
});
