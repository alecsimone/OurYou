import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import { desktopBreakpointPx } from '@styles/breakpoints';
import * as stories from './NavButtons.stories';

const { WithHamburger } = composeStories(stories);

describe('NavButtons', () => {
  it('renders a hamburger icon and a plus icon', () => {
    render(<WithHamburger />);

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    expect(hamburger).toBeInTheDocument();

    const plus = screen.getByTitle('New Post');
    expect(plus).toBeInTheDocument();
  });

  it('toggles the nav sidebar', async () => {
    window.innerWidth = desktopBreakpointPx;
    const toggleNav = jest.fn(() => {});
    const user = userEvent.setup();
    render(<WithHamburger toggleNavSidebar={toggleNav} />);

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    const hamburgerIcon = hamburger.parentElement;
    expect(hamburgerIcon).toBeVisible();

    await user.click(hamburger);
    expect(toggleNav).toBeCalledTimes(1);

    const icon = hamburger.closest('svg');
    icon?.focus();

    await user.keyboard('{Enter}');
    expect(toggleNav).toBeCalledTimes(2);

    await user.keyboard(' ');
    expect(toggleNav).toBeCalledTimes(3);
  });
});
