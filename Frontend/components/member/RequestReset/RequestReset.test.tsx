import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import waitForQuery from 'utils/testing/waitForQuery';
import * as stories from './RequestReset.stories';

const { Basic, ResetRequested } = composeStories(stories);

describe('RequestReset', () => {
  it('renders the necessary form fields and lets the user type in them', async () => {
    const user = userEvent.setup();
    render(<Basic />);

    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();

    await user.type(emailInput, 'test string');
    expect(emailInput).toHaveValue('test string');
  });

  it('disables the submit button if all inputs are not valid and tells the user why', async () => {
    const user = userEvent.setup();
    render(<Basic />);

    const submitButton = screen.getByText('Request Reset', {
      selector: 'button',
    });
    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    const emailInput = screen.getByPlaceholderText('Email');

    await user.type(emailInput, 'ab');
    expect(emailInput).toHaveValue('ab');

    const badEmailWarning = screen.getByText('Must be a valid email address');
    expect(badEmailWarning).toBeInTheDocument();

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');
    await user.clear(emailInput);
    await user.type(emailInput, 'test@example.com');

    expect(badEmailWarning).not.toBeInTheDocument();

    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('shows a success message after resetting the form', async () => {
    const user = userEvent.setup();
    render(<ResetRequested />);

    const submitButton = screen.getByText('Request Reset', {
      selector: 'button',
    });

    const emailInput = screen.getByPlaceholderText('Email');
    await user.type(emailInput, 'test@example.com');
    await user.click(submitButton);

    await waitForQuery();

    const success = screen.getByText(
      'Password reset requested. Please check your email for the reset link.'
    );
    expect(success).toBeInTheDocument();
  });
});
