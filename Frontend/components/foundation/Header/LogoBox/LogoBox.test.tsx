import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Providers from 'components/foundation/Providers';
import LogoBox from './LogoBox';

describe('LogoBox', () => {
  it('renders our logo and name', () => {
    render(
      <Providers>
        <LogoBox toggleNavSidebar={() => {}} />
      </Providers>
    );

    const logo = screen.getByTitle('Ouryou');
    expect(logo).toBeInTheDocument();

    // This should get both the title text from the logo and the link text from the name link.
    const name = screen.getAllByText('Ouryou');
    expect(name).toHaveLength(2);
  });
});
