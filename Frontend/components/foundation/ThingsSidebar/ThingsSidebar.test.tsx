import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import Providers from '../Providers';
import ThingsSidebar from './ThingsSidebar';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));

describe('ThingsSidebar', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  it('Says ThingsSidebar', () => {
    render(
      <Providers>
        <ThingsSidebar isOpen />
      </Providers>
    );

    const text = screen.getByText('ThingsSidebar');
    expect(text).toBeInTheDocument();
  });
});
