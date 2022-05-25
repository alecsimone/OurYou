import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import MockProviders from '../MockProviders';
import navLinks from './NavLinks';
import NavSidebar from './NavSidebar';

describe('NavSidebar', () => {
  it('renders the nav links', () => {
    render(
      <MockProviders>
        <NavSidebar
          isOpen
          toggleOpen={() => {}}
        />
      </MockProviders>
    );

    navLinks.forEach((linkObj) => {
      const navLine = screen.getByText(linkObj.text, {
        selector: 'span.navLabel',
      });
      expect(navLine).toBeInTheDocument();
    });
  });

  it('collapses and Expands', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders>
        <NavSidebar
          isOpen
          toggleOpen={() => {}}
        />
      </MockProviders>
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

  it('routes and calls toggle on click', async () => {
    const user = userEvent.setup();
    const toggle = jest.fn(() => {});
    render(
      <MockProviders>
        <RouterContext.Provider value={mockRouter}>
          <NavSidebar
            isOpen
            toggleOpen={toggle}
          />
        </RouterContext.Provider>
      </MockProviders>
    );

    const twitterLinkObj = navLinks.find(
      (linkObj) => linkObj.text === 'Twitter'
    );
    if (twitterLinkObj != null) {
      const { text, href } = twitterLinkObj;

      const twitterLink = screen.getByText(text, {
        selector: 'span.navLabel',
      });
      expect(twitterLink).toBeInTheDocument();

      await user.click(twitterLink);
      expect(mockRouter.pathname).toBe(href);
      expect(toggle).toBeCalledTimes(1);

      twitterLink.focus();
      await user.keyboard('{Enter}');
      expect(toggle).toBeCalledTimes(2);
    } else {
      // If we didn't find the twitterLinkObj, we want to throw an error. This is mostly just to keep typescript from worrying that twitterLinkObj might be null, while still throwing an exception if it is.
      expect(twitterLinkObj).toBe(true);
    }
  });
});
