import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import waitForQuery from 'utils/testing/waitForQuery';
import * as stories from './ProfileSidebar.stories';

const { Basic } = composeStories(stories);

const fieldSearchStrings: RegExp[] = [
  /Default Privacy/i,
  /Display Name/i,
  /Role/i,
  /^Rep/i,
  /Giveable Rep/i,
  /Email/i,
  /Twitch Name/i,
  /Twitter Name/i,
  /Friend Requests/i,
];

describe('ProfileSidebar', () => {
  it('Shows the profile information', async () => {
    render(<Basic />);

    await waitForQuery();

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();

    fieldSearchStrings.forEach((searchString) => {
      const field = screen.getByText(searchString);
      expect(field).toBeInTheDocument();
    });
  });

  const user = userEvent.setup();

  it("Changes the member's display name", async () => {
    render(<Basic />);

    await waitForQuery();

    const displayName = screen.getByDisplayValue('Alec');
    expect(displayName).toBeInTheDocument();

    await user.clear(displayName);

    await user.type(displayName, 'Still Alec');
    await user.keyboard('{Enter}');

    expect(displayName).toHaveValue('Still Alec');

    await waitForQuery();

    // We have the mock set up to return Not Alec when the input is Still Alec so that we can test that we're actually updating the value based on the mutation result and that the mutation is working
    expect(displayName).toHaveValue('Not Alec');
  });

  // it("Changes the member's default privacy", async () => {
  //   render(<Basic />);

  //   await waitForQuery();

  //   const avatar = screen.getByAltText('avatar');
  //   expect(avatar).toBeInTheDocument();

  //   fieldSearchStrings.forEach((searchString) => {
  //     const field = screen.getByText(searchString);
  //     expect(field).toBeInTheDocument();
  //   });
  // });
});
