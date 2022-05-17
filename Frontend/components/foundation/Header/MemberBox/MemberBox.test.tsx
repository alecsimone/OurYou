import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Providers from 'components/foundation/Providers';
import MemberBox from './MemberBox';

describe('MemberBox', () => {
  it('renders the bell, rep, name, and avatar', () => {
    render(
      <Providers>
        <MemberBox toggleThingsSidebar={() => {}} />
      </Providers>
    );

    const bell = screen.getByTitle('Notifications');
    expect(bell).toBeInTheDocument();

    const rep = screen.getByText('1', { exact: false });
    expect(rep).toBeInTheDocument();

    const name = screen.getByText('Alec', { exact: false });
    expect(name).toBeInTheDocument();

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();
  });

  it("links to the user's profile page", async () => {
    mockRouter.setCurrentUrl('/');
    const user = userEvent.setup();

    render(
      <Providers>
        <RouterContext.Provider value={mockRouter}>
          <MemberBox toggleThingsSidebar={() => {}} />
        </RouterContext.Provider>
      </Providers>
    );

    const rep = screen.getByText('1', { exact: false });
    expect(rep).toBeInTheDocument();

    const name = screen.getByText('Alec', { exact: false });
    expect(name).toBeInTheDocument();

    await user.click(name);
    expect(mockRouter.pathname).toBe('/me');

    act(() => {
      mockRouter.push({ pathname: '/' });
    });

    await user.click(rep);
    expect(mockRouter.pathname).toBe('/me');
  });

  it('toggles the things sidebar', async () => {
    const toggleThingsSidebar = jest.fn(() => {});
    const user = userEvent.setup();
    render(
      <Providers>
        <MemberBox toggleThingsSidebar={toggleThingsSidebar} />
      </Providers>
    );
    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();

    await user.click(avatar);
    expect(toggleThingsSidebar).toBeCalledTimes(1);
  });
});
