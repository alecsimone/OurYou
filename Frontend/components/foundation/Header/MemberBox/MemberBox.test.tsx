import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Providers from 'components/foundation/Providers';
import MemberBox from './MemberBox';

describe('MemberBox', () => {
  it('Renders the bell, rep, name, and avatar', () => {
    render(
      <Providers>
        <MemberBox toggleThingsSidebar={() => {}} />
      </Providers>
    );

    const bell = screen.getByTitle('Notifications');
    expect(bell).toBeInTheDocument();

    const rep = screen.getByText('1', { exact: false });
    expect(rep).toBeInTheDocument();

    const name = screen.getByText('Alec', { exact: false });
    expect(name).toBeInTheDocument();

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();
  });
});
