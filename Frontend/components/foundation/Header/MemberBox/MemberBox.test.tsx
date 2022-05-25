import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import MockProviders from 'components/foundation/MockProviders';
import waitForQuery from 'utils/testing/waitForQuery';
import MemberBox from './MemberBox';
import MEMBER_BOX_QUERY from './queries';

const mocks = [
  {
    request: {
      query: MEMBER_BOX_QUERY,
    },
    result: {
      data: {
        authenticatedItem: {
          __typename: 'Member',
          displayName: 'Alec',
          rep: 1,
          avatar:
            'https://pbs.twimg.com/profile_images/917202644740956160/lMFbGZ-e_400x400.jpg',
        },
      },
    },
  },
];

const loggedOutMocks = [
  {
    request: {
      query: MEMBER_BOX_QUERY,
    },
    result: {
      data: {
        authenticatedItem: null,
      },
    },
  },
];

describe('MemberBox', () => {
  it('shows a sign up or log in prompt if not logged in', async () => {
    const user = userEvent.setup();

    render(
      <MockProviders mocks={loggedOutMocks}>
        <MemberBox toggleThingsSidebar={() => {}} />
      </MockProviders>
    );

    await waitForQuery();

    const prompt = screen.getByText(/sign up or log in/i);
    expect(prompt).toBeInTheDocument();

    await user.click(prompt);
    const forms = screen.getByText('Sign up and Log in forms');
    expect(forms).toBeInTheDocument();
  });
  it('renders the bell, rep, name, and avatar', async () => {
    render(
      <MockProviders mocks={mocks}>
        <MemberBox toggleThingsSidebar={() => {}} />
      </MockProviders>
    );

    const loadingText = screen.getByText('Authenticating...');
    expect(loadingText).toBeInTheDocument();

    await waitForQuery();

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
      <MockProviders mocks={mocks}>
        <RouterContext.Provider value={mockRouter}>
          <MemberBox toggleThingsSidebar={() => {}} />
        </RouterContext.Provider>
      </MockProviders>
    );

    await waitForQuery();

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
      <MockProviders mocks={mocks}>
        <MemberBox toggleThingsSidebar={toggleThingsSidebar} />
      </MockProviders>
    );

    await waitForQuery();

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();

    await user.click(avatar);
    expect(toggleThingsSidebar).toBeCalledTimes(1);
  });
});
