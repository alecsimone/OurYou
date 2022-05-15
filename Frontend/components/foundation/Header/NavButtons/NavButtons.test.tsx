import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Providers from 'components/foundation/Providers';
import NavButtons from './NavButtons';

describe('NavButtons', () => {
  it('Renders a hamburger icon and a plus icon', () => {
    render(
      <Providers>
        <NavButtons toggleNavSidebar={() => {}} />
      </Providers>
    );

    const hamburger = screen.getByTitle('Show Nav Sidebar');
    expect(hamburger).toBeInTheDocument();

    const plus = screen.getByTitle('New Post');
    expect(plus).toBeInTheDocument();
  });
});
