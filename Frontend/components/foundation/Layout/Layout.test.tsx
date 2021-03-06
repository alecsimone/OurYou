import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { act } from 'react-dom/test-utils';
import { composeStories } from '@storybook/testing-react';
import { desktopBreakpointPx, mobileBreakpointPx } from '@styles/breakpoints';
import waitForQuery from 'utils/testing/waitForQuery';
import * as stories from './Layout.stories';

const { Home, NotHome } = composeStories(stories);

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));

const user = userEvent.setup();
describe('Layout', () => {
  it('toggles the sidebars', async () => {
    mockRouter.setCurrentUrl('/');
    window.innerWidth = mobileBreakpointPx + 1;
    render(<Home />);

    await waitForQuery();

    // The Things Sidebar should start hidden
    const thingsSidebar = screen.queryByText('ThingsSidebar');
    expect(thingsSidebar).toBeInTheDocument();
    expect(thingsSidebar).toHaveClass('hidden');

    const avatar = screen.getByAltText(/avatar/i, { exact: false });
    expect(avatar).toBeInTheDocument();

    // Clicking the avatar should show it
    await user.click(avatar);
    expect(thingsSidebar).toHaveClass('visible');

    // Clicking again should hide it
    await user.click(avatar);
    expect(thingsSidebar).toHaveClass('hidden');

    // The Nav Sidebar should start hidden
    const navSidebar = screen.getByTestId('navSidebar');
    expect(navSidebar).toBeInTheDocument();
    expect(navSidebar).toHaveClass('hidden');

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    expect(hamburger).toBeInTheDocument();

    // Clicking the hamburger should show it
    await user.click(hamburger);
    expect(navSidebar).toHaveClass('visible');

    // Clicking again should hide it
    await user.click(hamburger);
    expect(navSidebar).toHaveClass('hidden');
  });

  it('does not render the things sidebar at first if not on the homepage, but can still open it', async () => {
    window.innerWidth = desktopBreakpointPx + 1;
    render(<NotHome />);

    await waitForQuery();

    const thingsSidebar = screen.queryByText('ThingsSidebar');
    expect(thingsSidebar).toBeInTheDocument();
    expect(thingsSidebar).toHaveClass('hidden');

    const avatar = screen.getByAltText(/avatar/i, { exact: false });
    expect(avatar).toBeInTheDocument();

    // Clicking the avatar should show it
    await user.click(avatar);
    expect(thingsSidebar).toHaveClass('visible');

    // Clicking again should hide it
    await user.click(avatar);
    expect(thingsSidebar).toHaveClass('hidden');

    // If we route to the homepage it should show the things sidebar
    act(() => {
      mockRouter.push({ pathname: '/' });
    });
    expect(thingsSidebar).toHaveClass('visible');

    // Clicking the avatar should hide it
    await user.click(avatar);
    expect(thingsSidebar).toHaveClass('hidden');

    // Clicking the avatar again should show it
    await user.click(avatar);
    expect(thingsSidebar).toHaveClass('visible');

    // And routing back away should close it
    act(() => {
      mockRouter.push({ pathname: '/twitter' });
    });
    expect(thingsSidebar).toHaveClass('hidden');
  });
});
