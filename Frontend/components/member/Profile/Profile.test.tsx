import { render, screen } from '@testing-library/react';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import waitForQuery from 'utils/testing/waitForQuery';
import Profile from './Profile';
import { validProfileSidebarMock } from './ProfileSidebar/queryMocks';

describe('Profile', () => {
  it(' shows member data when given a valid id', async () => {
    render(
      <MockProviders mocks={validProfileSidebarMock}>
        <Profile
          memberID="123"
          editable
        />
      </MockProviders>
    );

    await waitForQuery();

    const defaultPrivacy = screen.getByText(/friends/i);
    expect(defaultPrivacy).toBeInTheDocument();

    const displayName = screen.getByDisplayValue(/alec/i);
    expect(displayName).toBeInTheDocument();

    const role = screen.getByText(/member/i);
    expect(role).toBeInTheDocument();

    const rep = screen.getByText('Rep: 1');
    expect(rep).toBeInTheDocument();

    const giveableRep = screen.getByText('Giveable Rep: 1');
    expect(giveableRep).toBeInTheDocument();

    const email = screen.getByText(/test@example.com/i);
    expect(email).toBeInTheDocument();

    const twitchName = screen.getByText('Twitch Name: Not Connected');
    expect(twitchName).toBeInTheDocument();

    const twitterName = screen.getByText('Twitter Name: Not Connected');
    expect(twitterName).toBeInTheDocument();
  });
});
