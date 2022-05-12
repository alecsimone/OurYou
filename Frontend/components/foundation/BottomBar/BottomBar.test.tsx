import theme from '@styles/theme';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import BottomBar from './BottomBar';

describe('BottomBar', () => {
  it('Shows search and new thing forms and moves seamlessly between them', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <BottomBar />
      </ThemeProvider>
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
});
