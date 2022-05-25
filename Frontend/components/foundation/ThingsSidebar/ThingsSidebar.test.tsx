import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import MockProviders from '../MockProviders';
import ThingsSidebar from './ThingsSidebar';

describe('ThingsSidebar', () => {
  it('says ThingsSidebar', () => {
    mockRouter.setCurrentUrl('/');
    render(
      <MockProviders>
        <RouterContext.Provider value={mockRouter}>
          <ThingsSidebar isOpen />
        </RouterContext.Provider>
      </MockProviders>
    );

    const theSidebar = screen.getByText('ThingsSidebar');
    expect(theSidebar).toBeInTheDocument();
    expect(theSidebar).toHaveClass('home');
  });

  it("knows when it's not on the homepage", () => {
    mockRouter.setCurrentUrl('/twitter');
    render(
      <MockProviders>
        <RouterContext.Provider value={mockRouter}>
          <ThingsSidebar isOpen />
        </RouterContext.Provider>
      </MockProviders>
    );

    const theSidebar = screen.getByText('ThingsSidebar');
    expect(theSidebar).not.toHaveClass('home');
  });
});
