import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Avatar.stories';

const { Basic, WithAvatar } = composeStories(stories);

describe('Avatar', () => {
  it('Shows the default avatar when no avatar is given', () => {
    render(<Basic />);

    const avatar = screen.getByTitle('DefaultAvatar');
    expect(avatar).toBeInTheDocument();

    // Just to be extra sure, let's make sure this is an SVG
    const svg = avatar.closest('svg');
    expect(svg).toBeInTheDocument();
  });

  it('Shows an image if one is provided', () => {
    render(<WithAvatar />);

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();

    // Just to be extra sure, let's make sure this is an img
    const img = avatar.closest('img');
    expect(img).toBeInTheDocument();
  });

  const trigger = jest.fn(() => {});

  it('Calls its onTrigger function', async () => {
    const user = userEvent.setup();
    render(<WithAvatar onTrigger={trigger} />);

    const avatar = screen.getByAltText('avatar');

    await user.click(avatar);
    expect(trigger).toHaveBeenCalledTimes(1);

    await user.keyboard('{Enter}');
    expect(trigger).toBeCalledTimes(2);

    await user.keyboard(' ');
    expect(trigger).toBeCalledTimes(3);
  });
});
