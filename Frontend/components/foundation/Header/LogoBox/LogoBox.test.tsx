import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import mockRouter from 'next-router-mock';
import { act } from 'react-dom/test-utils';
import { desktopBreakpointPx, mobileBreakpointPx } from '@styles/breakpoints';
import MockProviders from 'components/foundation/MockProviders';
import LogoBox from './LogoBox';

describe('LogoBox', () => {
  it('renders our logo and name', () => {
    render(
      <MockProviders>
        <LogoBox toggleNavSidebar={() => {}} />
      </MockProviders>
    );

    const logo = screen.getByTitle('Ouryou');
    expect(logo).toBeInTheDocument();

    const name = screen.getByText('Ouryou', {
      selector: 'a.siteName',
    });
    expect(name).toBeInTheDocument();
  });

  it("doesn't render the name below the mobile breakpoint", () => {
    window.innerWidth = mobileBreakpointPx;
    render(
      <MockProviders>
        <LogoBox toggleNavSidebar={() => {}} />
      </MockProviders>
    );

    const logo = screen.getByTitle('Ouryou');
    expect(logo).toBeInTheDocument();

    const name = screen.queryByText('Ouryou', {
      selector: 'a.siteName',
    });
    // We use toBeVisible because it's hidden with css
    expect(name).not.toBeVisible();
  });

  it('calls toggleNavSidebar when the logo is clicked', async () => {
    window.innerWidth = mobileBreakpointPx;
    const toggleNav = jest.fn(() => {});
    const user = userEvent.setup();
    render(
      <MockProviders>
        <LogoBox toggleNavSidebar={toggleNav} />
      </MockProviders>
    );

    const logo = screen.getByTitle('Ouryou');
    expect(logo).toBeInTheDocument();

    await user.click(logo);
    expect(toggleNav).toBeCalledTimes(1);

    const icon = logo.closest('svg');
    icon?.focus();

    await user.keyboard('{Enter}');
    expect(toggleNav).toBeCalledTimes(2);

    await user.keyboard(' ');
    expect(toggleNav).toBeCalledTimes(3);
  });

  it('routes to the homepage when clicked above the mobile breakpoint', async () => {
    window.innerWidth = desktopBreakpointPx;
    mockRouter.setCurrentUrl('/twitter');
    const toggleNav = jest.fn(() => {});
    const user = userEvent.setup();
    render(
      <MockProviders>
        <RouterContext.Provider value={mockRouter}>
          <LogoBox toggleNavSidebar={toggleNav} />
        </RouterContext.Provider>
      </MockProviders>
    );

    const logo = screen.getByTitle('Ouryou');
    expect(logo).toBeInTheDocument();

    const name = screen.getByText('Ouryou', {
      selector: 'a.siteName',
    });

    await user.click(logo);
    expect(toggleNav).toBeCalledTimes(0);
    expect(mockRouter.pathname).toBe('/');

    act(() => {
      mockRouter.push({ pathname: '/twitter' });
    });
    await user.click(name);
    expect(toggleNav).toBeCalledTimes(0);
    expect(mockRouter.pathname).toBe('/');
  });
});
