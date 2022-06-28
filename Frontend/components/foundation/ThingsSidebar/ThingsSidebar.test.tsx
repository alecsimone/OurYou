import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './ThingsSidebar.stories';

const { Basic, NotHome } = composeStories(stories);

describe('ThingsSidebar', () => {
  it('says ThingsSidebar', () => {
    render(<Basic />);

    const theSidebar = screen.getByText('ThingsSidebar');
    expect(theSidebar).toBeInTheDocument();
    expect(theSidebar).toHaveClass('home');
  });

  it("knows when it's not on the homepage", () => {
    render(<NotHome />);

    const theSidebar = screen.getByText('ThingsSidebar');
    expect(theSidebar).not.toHaveClass('home');
  });
});
