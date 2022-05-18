import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import Providers from '../Providers';
import ThingsSidebar from './ThingsSidebar';

describe('ThingsSidebar', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  it('Says ThingsSidebar', () => {
    render(
      <Providers>
        <RouterContext.Provider value={mockRouter}>
          <ThingsSidebar isOpen />
        </RouterContext.Provider>
      </Providers>
    );

    const text = screen.getByText('ThingsSidebar');
    expect(text).toBeInTheDocument();
  });
});
