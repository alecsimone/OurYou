import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import Providers from '../Providers';
import Layout from './Layout';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));

describe('Layout', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  it('Toggles the sidebars', async () => {
    const user = userEvent.setup();
    render(
      <Providers>
        <Layout>
          <div>Page component</div>
        </Layout>
      </Providers>
    );

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
});
