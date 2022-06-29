import { render, screen } from '@testing-library/react';
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

    const avatar = screen.getByTitle('DefaultAvatar');
    expect(avatar).toBeInTheDocument();

    fieldSearchStrings.forEach((searchString) => {
      const field = screen.getByText(searchString);
      expect(field).toBeInTheDocument();
    });
  });
});
