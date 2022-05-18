import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Providers from '../Providers';
import NavSidebar, { navLinks } from './NavSidebar';

describe('NavSidebar', () => {
  it('Renders the nav links', () => {
    render(
      <Providers>
        <NavSidebar
          isOpen
          toggleOpen={() => {}}
        />
      </Providers>
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
      <Providers>
        <NavSidebar
          isOpen
          toggleOpen={() => {}}
        />
      </Providers>
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

  it('Routes and calls toggle on click', async () => {
    const user = userEvent.setup();
    const toggle = jest.fn(() => {});
    render(
      <Providers>
        <RouterContext.Provider value={mockRouter}>
          <NavSidebar
            isOpen
            toggleOpen={toggle}
          />
        </RouterContext.Provider>
      </Providers>
    );

    const twitterLink = screen.getByText('Twitter', {
      selector: 'span.navLabel',
    });
    expect(twitterLink).toBeInTheDocument();

    await user.click(twitterLink);
    expect(mockRouter.pathname).toBe('/twitter');
    expect(toggle.mock.calls.length).toBe(1);
  });
});
