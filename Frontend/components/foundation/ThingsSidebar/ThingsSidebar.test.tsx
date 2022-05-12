import theme from '@styles/theme';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { ThemeProvider } from 'styled-components';
import ThingsSidebar from './ThingsSidebar';

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'));

describe('ThingsSidebar', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  it('Says ThingsSidebar', () => {
    render(
      <ThemeProvider theme={theme}>
        <ThingsSidebar isOpen />
      </ThemeProvider>
    );

    const text = screen.getByText('ThingsSidebar');
    expect(text).toBeInTheDocument();
  });
});
