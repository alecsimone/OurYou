import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import mockRouter from 'next-router-mock';
import { act } from 'react-dom/test-utils';
import Providers from 'components/foundation/Providers';
import LogoBox from './LogoBox';

describe('LogoBox', () => {
  it('renders our logo and name', () => {
    render(
      <Providers>
        <LogoBox toggleNavSidebar={() => {}} />
      </Providers>
    );

    const logo = screen.getByTitle('Ouryou');
    expect(logo).toBeInTheDocument();

    const name = screen.getByText('Ouryou', {
      selector: 'a.siteName',
    });
    expect(name).toBeInTheDocument();
  });

  it("doesn't render the name below the mobile breakpoint", () => {
    window.innerWidth = 500;
    render(
      <Providers>
        <LogoBox toggleNavSidebar={() => {}} />
      </Providers>
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
    window.innerWidth = 500;
    const toggleNav = jest.fn(() => {});
    const user = userEvent.setup();
    render(
      <Providers>
        <LogoBox toggleNavSidebar={toggleNav} />
      </Providers>
    );

    const logo = screen.getByTitle('Ouryou');
    expect(logo).toBeInTheDocument();

    await user.click(logo);
    expect(toggleNav).toBeCalledTimes(1);
  });

  it('routes to the homepage when clicked above the mobile breakpoint', async () => {
    window.innerWidth = 1200;
    mockRouter.setCurrentUrl('/twitter');
    const toggleNav = jest.fn(() => {});
    const user = userEvent.setup();
    render(
      <Providers>
        <RouterContext.Provider value={mockRouter}>
          <LogoBox toggleNavSidebar={toggleNav} />
        </RouterContext.Provider>
      </Providers>
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
