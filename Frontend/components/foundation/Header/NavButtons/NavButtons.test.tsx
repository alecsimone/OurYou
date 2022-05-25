import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { desktopBreakpointPx } from '@styles/breakpoints';
import MockProviders from 'components/foundation/MockProviders';
import NavButtons from './NavButtons';

describe('NavButtons', () => {
  it('renders a hamburger icon and a plus icon', () => {
    render(
      <MockProviders>
        <NavButtons toggleNavSidebar={() => {}} />
      </MockProviders>
    );

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    expect(hamburger).toBeInTheDocument();

    const plus = screen.getByTitle('New Post');
    expect(plus).toBeInTheDocument();
  });

  it('toggles the nav sidebar', async () => {
    window.innerWidth = desktopBreakpointPx;
    const toggleNav = jest.fn(() => {});
    const user = userEvent.setup();
    render(
      <MockProviders>
        <NavButtons toggleNavSidebar={toggleNav} />
      </MockProviders>
    );

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    const hamburgerIcon = hamburger.parentElement;
    expect(hamburgerIcon).toBeVisible();

    await user.click(hamburger);
    expect(toggleNav).toBeCalled();
  });
});
