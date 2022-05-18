import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Providers from '../Providers';
import ThingsSidebar from './ThingsSidebar';

describe('ThingsSidebar', () => {
  it('says ThingsSidebar', () => {
    mockRouter.setCurrentUrl('/');
    render(
      <Providers>
        <RouterContext.Provider value={mockRouter}>
          <ThingsSidebar isOpen />
        </RouterContext.Provider>
      </Providers>
    );

    const theSidebar = screen.getByText('ThingsSidebar');
    expect(theSidebar).toBeInTheDocument();
    expect(theSidebar).toHaveClass('home');
  });

  it("knows when it's not on the homepage", () => {
    mockRouter.setCurrentUrl('/twitter');
    render(
      <Providers>
        <RouterContext.Provider value={mockRouter}>
          <ThingsSidebar isOpen />
        </RouterContext.Provider>
      </Providers>
    );

    const theSidebar = screen.getByText('ThingsSidebar');
    expect(theSidebar).not.toHaveClass('home');
  });
});
