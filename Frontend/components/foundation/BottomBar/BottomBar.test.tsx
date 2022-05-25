import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import MockProviders from '../MockProviders';
import BottomBar from './BottomBar';

describe('BottomBar', () => {
  it('Shows search and new thing forms and moves seamlessly between them', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders>
        <BottomBar />
      </MockProviders>
    );

    // To start with, we should have Search, Home, and New Thing buttons, but no form
    const searchButton = screen.getByTitle('Search');
    expect(searchButton).toBeInTheDocument();

    const homeButton = screen.getByTitle('Home');
    expect(homeButton).toBeInTheDocument();

    const newThingButton = screen.getByTitle('New');
    expect(newThingButton).toBeInTheDocument();

    const input = screen.queryByRole('textbox');
    expect(input).not.toBeInTheDocument();

    // After clicking the Search button, the search form should show
    await user.click(searchButton);
    const inputAfterClick = screen.queryByRole('textbox'); // Going to do it this way first just to confirm that our .not.toBeInTheDocument() above is not a false negative
    expect(inputAfterClick).toBeInTheDocument();

    const searchForm = screen.getByPlaceholderText('Search');
    expect(searchForm).toBeInTheDocument();

    // After typing in the search form, our text should be in it
    const searchString = 'Search String';
    await user.type(searchForm, searchString);
    expect(searchForm).toHaveValue(searchString);

    // After clicking the search button again, the search form should be hidden
    await user.click(searchButton);
    expect(searchForm).not.toBeInTheDocument();

    // After clicking the search button again, the search form should show, and our text should be in it
    await user.click(searchButton);
    const searchFormAgain = screen.getByPlaceholderText('Search');
    expect(searchFormAgain).toBeInTheDocument();
    expect(searchFormAgain).toHaveValue(searchString);

    // After clicking the New Thing button, the new thing form should show, and it should be empty
    await user.click(newThingButton);
    const newThingForm = screen.getByPlaceholderText('Thing Title');
    expect(newThingForm).toBeInTheDocument();
    expect(newThingForm).toHaveValue('');

    // After typing in the new thing form, our text should be in it
    const titleString = 'Thing Title';
    await user.type(newThingForm, titleString);
    expect(newThingForm).toHaveValue(titleString);

    // After clicking the new thing button again, the new thing form should be hidden
    await user.click(newThingButton);
    expect(newThingForm).not.toBeInTheDocument();

    // After clicking the new thing button one more time, the new thing form should show, and our text should still be in it
    await user.click(newThingButton);
    const newThingFormAgain = screen.getByPlaceholderText('Thing Title');
    expect(newThingFormAgain).toBeInTheDocument();
    expect(newThingFormAgain).toHaveValue(titleString);

    // After clicking the search button, the search form should show, and it should be empty
    await user.click(searchButton);
    const searchFormFinal = screen.getByPlaceholderText('Search');
    expect(searchFormFinal).toBeInTheDocument();
    expect(searchFormFinal).toHaveValue('');
  });

  it('Calls the search and new thing functions', async () => {
    const user = userEvent.setup();
    // console.log = jest.fn();
    jest.spyOn(console, 'log').mockImplementation();
    render(
      <MockProviders>
        <BottomBar />
      </MockProviders>
    );

    // Search
    // Make sure the search button is in the document
    const searchButton = screen.getByTitle('Search');
    expect(searchButton).toBeInTheDocument();

    // Make sure it shows the search form
    await user.click(searchButton);
    const searchForm = screen.getByPlaceholderText('Search');
    expect(searchForm).toBeInTheDocument();

    // Make sure we can type into it
    const searchString = 'Search String';
    await user.type(searchForm, searchString);
    expect(searchForm).toHaveValue(searchString);

    // Make sure it goes away after we hit enter
    await user.keyboard('{Enter}');
    expect(searchForm).not.toBeInTheDocument();

    // And that it console logs our searchString, since we're console logging right now instead of actually searching
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalledTimes(1);
    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenLastCalledWith(
      `Searching for: ${searchString}`
    );

    // New Thing
    // Make sure the search button is in the document
    const newThingButton = screen.getByTitle('New');
    expect(newThingButton).toBeInTheDocument();

    // Make sure it shows the search form
    await user.click(newThingButton);
    const newThingForm = screen.getByPlaceholderText('Thing Title');
    expect(newThingForm).toBeInTheDocument();

    // Make sure we can type into it
    const newThingString = 'New Thing String';
    await user.type(newThingForm, newThingString);
    expect(newThingForm).toHaveValue(newThingString);

    // Make sure it goes away after we hit enter
    await user.keyboard('{Enter}');
    expect(newThingForm).not.toBeInTheDocument();

    // And that it console logs our newThingString, since we're console logging right now instead of actually creating a thing
    // eslint-disable-next-line no-console
    expect(console.log).toBeCalledTimes(2);
    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenLastCalledWith(
      `Creating post: ${newThingString}`
    );
  });

  it('routes to the home page after clicking the Home button', async () => {
    const user = userEvent.setup();
    mockRouter.setCurrentUrl('/twitter');
    render(
      <MockProviders>
        <RouterContext.Provider value={mockRouter}>
          <BottomBar />
        </RouterContext.Provider>
      </MockProviders>
    );

    const homeButton = screen.getByTitle('Home');
    expect(homeButton).toBeInTheDocument();

    await user.click(homeButton);
    expect(mockRouter.pathname).toBe('/');
  });
});
