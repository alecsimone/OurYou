import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import waitForQuery from 'utils/testing/waitForQuery';
import MockProviders from '../MockProviders';
import Header from './Header';
import MEMBER_BOX_QUERY from './MemberBox/queries';

const mocks = [
  {
    request: {
      query: MEMBER_BOX_QUERY,
    },
    result: {
      data: {
        authenticatedItem: {
          __typename: 'Member',
          displayName: 'Alec',
          rep: 1,
          avatar:
            'https://pbs.twimg.com/profile_images/917202644740956160/lMFbGZ-e_400x400.jpg',
        },
      },
    },
  },
];

describe('Header', () => {
  it('shows and hides the search bar', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders mocks={mocks}>
        <Header
          toggleNavSidebar={() => {}}
          toggleThingsSidebar={() => {}}
        />
      </MockProviders>
    );

    await waitForQuery();

    const searchIcon = screen.getByTitle('Search');
    expect(searchIcon).toBeInTheDocument();

    const searchBar = screen.queryByPlaceholderText('Search');
    expect(searchBar).not.toBeInTheDocument();

    await user.click(searchIcon);
    const searchBarAfterClick = screen.queryByPlaceholderText('Search');

    await user.click(searchIcon);
    expect(searchBarAfterClick).not.toBeInTheDocument();
  });
});
