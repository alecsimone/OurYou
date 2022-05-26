import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import basicMemberMock from 'utils/testing/basicMemberMock';
import waitForQuery from 'utils/testing/waitForQuery';
import MockProviders from '../MockProviders';
import Header from './Header';

describe('Header', () => {
  it('shows and hides the search bar', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders mocks={basicMemberMock}>
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
