import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Providers from 'components/foundation/Providers';
import NavButtons from './NavButtons';

describe('NavButtons', () => {
  it('renders a hamburger icon and a plus icon', () => {
    render(
      <Providers>
        <NavButtons toggleNavSidebar={() => {}} />
      </Providers>
    );

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    expect(hamburger).toBeInTheDocument();

    const plus = screen.getByTitle('New Post');
    expect(plus).toBeInTheDocument();
  });

  it('toggles the nav sidebar', async () => {
    window.innerWidth = 1000;
    const toggleNav = jest.fn(() => {});
    const user = userEvent.setup();
    render(
      <Providers>
        <NavButtons toggleNavSidebar={toggleNav} />
      </Providers>
    );

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    const hamburgerIcon = hamburger.parentElement;
    expect(hamburgerIcon).toBeVisible();

    await user.click(hamburger);
    expect(toggleNav).toBeCalled();
  });
});
