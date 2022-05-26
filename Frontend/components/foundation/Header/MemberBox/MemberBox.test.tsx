import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import MockProviders from 'components/foundation/MockProviders';
import waitForQuery from 'utils/testing/waitForQuery';
import initialMemberMock, {
  avatarlessMemberMock,
  loggedOutMock,
  mockDisplayName,
  mockRep,
} from 'utils/testing/initialMemberMock';
import MemberBox from './MemberBox';

const repAndNameLinkText = `[${mockRep}] ${mockDisplayName}`;

describe('MemberBox', () => {
  it('shows a sign up or log in prompt if not logged in', async () => {
    const user = userEvent.setup();

    render(
      <MockProviders mocks={loggedOutMock}>
        <MemberBox toggleThingsSidebar={() => {}} />
      </MockProviders>
    );

    await waitForQuery();

    const signUpButton = screen.getByText(/sign up/i);
    expect(signUpButton).toBeInTheDocument();

    const logInButton = screen.getByText(/log in/i);
    expect(logInButton).toBeInTheDocument();

    await user.click(signUpButton);
    const signUpForm = screen.getByPlaceholderText('Display Name');
    expect(signUpForm).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(signUpForm).not.toBeInTheDocument();

    await user.click(logInButton);
    const logInForm = screen.getByPlaceholderText('Email');
    expect(logInForm).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(logInForm).not.toBeInTheDocument();
  });

  it('renders the loading state, then the bell, rep, name, and avatar', async () => {
    render(
      <MockProviders mocks={initialMemberMock}>
        <MemberBox toggleThingsSidebar={() => {}} />
      </MockProviders>
    );

    const loadingText = screen.getByText('Authenticating...');
    expect(loadingText).toBeInTheDocument();

    await waitForQuery();

    const bell = screen.getByTitle('Notifications');
    expect(bell).toBeInTheDocument();

    const repAndNameLink = screen.getByText(repAndNameLinkText);
    expect(repAndNameLink).toBeInTheDocument();

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();
  });

  it('renders the default avatar if the user has no avatar', async () => {
    render(
      <MockProviders mocks={avatarlessMemberMock}>
        <MemberBox toggleThingsSidebar={() => {}} />
      </MockProviders>
    );

    await waitForQuery();

    const defaultAvatar = screen.getByTitle('DefaultAvatar');
    expect(defaultAvatar).toBeInTheDocument();
  });

  it("links to the user's profile page", async () => {
    mockRouter.setCurrentUrl('/');
    const user = userEvent.setup();

    render(
      <MockProviders mocks={initialMemberMock}>
        <RouterContext.Provider value={mockRouter}>
          <MemberBox toggleThingsSidebar={() => {}} />
        </RouterContext.Provider>
      </MockProviders>
    );

    await waitForQuery();

    const link = screen.getByText(repAndNameLinkText);
    expect(link).toBeInTheDocument();

    await user.click(link);
    expect(mockRouter.pathname).toBe('/me');

    act(() => {
      mockRouter.push({ pathname: '/' });
    });

    link.focus();
    await user.keyboard('{Enter}');
    expect(mockRouter.pathname).toBe('/me');
  });

  it('toggles the things sidebar', async () => {
    const toggleThingsSidebar = jest.fn(() => {});
    const user = userEvent.setup();
    render(
      <MockProviders mocks={initialMemberMock}>
        <MemberBox toggleThingsSidebar={toggleThingsSidebar} />
      </MockProviders>
    );

    await waitForQuery();

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();

    await user.click(avatar);
    expect(toggleThingsSidebar).toBeCalledTimes(1);

    avatar.focus();

    await user.keyboard('{Enter}');
    expect(toggleThingsSidebar).toBeCalledTimes(2);

    await user.keyboard(' ');
    expect(toggleThingsSidebar).toBeCalledTimes(3);
  });
});
