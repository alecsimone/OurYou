import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { composeStories } from '@storybook/testing-react';
import waitForQuery from 'utils/testing/waitForQuery';
import { navLinks } from './NavLinks';
import * as stories from './NavSidebar.stories';

const { Basic, LoggedIn } = composeStories(stories);

describe('NavSidebar', () => {
  it('renders the nav links', async () => {
    render(<LoggedIn />);

    await waitForQuery();

    navLinks.forEach((linkObj) => {
      const navLine = screen.getByText(linkObj.text, {
        selector: 'span.navLabel',
      });
      expect(navLine).toBeInTheDocument();
    });
  });

  it('renders the nav links', async () => {
    render(<Basic />);

    await waitForQuery();

    navLinks.forEach((linkObj) => {
      const navLine = screen.queryByText(linkObj.text, {
        selector: 'span.navLabel',
      });
      if (linkObj.text === 'Home' || linkObj.text === 'Search') {
        expect(navLine).toBeInTheDocument();
      } else {
        expect(navLine).not.toBeInTheDocument();
      }
    });
  });

  it('collapses and Expands', async () => {
    const user = userEvent.setup();
    render(<Basic />);

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
      <RouterContext.Provider value={mockRouter}>
        <LoggedIn toggleOpen={toggle} />
      </RouterContext.Provider>
    );

    await waitForQuery();

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
