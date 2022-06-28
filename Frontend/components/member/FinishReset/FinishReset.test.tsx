import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import waitForQuery from 'utils/testing/waitForQuery';
import * as stories from './FinishReset.stories';
import { expiredToken, redeemedToken, resetFailed } from './constants';

const {
  Basic,
  SuccessfulReset,
  FailedReset,
  ExpiredToken,
  AlreadyRedeemedToken,
} = composeStories(stories);

const necessaryFormFields = ['Email', 'Password', 'Confirm Password'];

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  pathname: '/reset',
  query: {
    code: 'test',
  },
  push: jest.fn(),
}));

describe('SignUp', () => {
  it('renders the necessary form fields and lets the user type in them', async () => {
    const user = userEvent.setup();
    render(<Basic />);

    const [emailInput, passwordInput, confirmPasswordInput] =
      necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

    await user.type(emailInput, 'test string');
    await user.type(passwordInput, 'test string');
    await user.type(confirmPasswordInput, 'test string');

    necessaryFormFields.forEach(async (field) => {
      const input = screen.getByPlaceholderText(field);
      expect(input).toBeInTheDocument();

      expect(input).toHaveValue('test string');
    });

    cleanup();
  });

  it('disables the submit button if all inputs are not valid and tells the user why', async () => {
    const user = userEvent.setup();

    render(<Basic />);

    const submitButton = screen.getByText('Reset Password', {
      selector: 'button',
    });
    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    const [emailInput, passwordInput, confirmPasswordInput] =
      necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

    await user.type(emailInput, 'ab');
    expect(emailInput).toHaveValue('ab');

    const badEmailWarning = screen.getByText('Must be a valid email address');
    expect(badEmailWarning).toBeInTheDocument();

    await user.type(passwordInput, 'ab');
    expect(passwordInput).toHaveValue('ab');

    const badPasswordWarning = screen.getByText(
      'Password must be at least 8 characters long'
    );
    expect(badPasswordWarning).toBeInTheDocument();

    await user.type(confirmPasswordInput, 'abc');
    expect(confirmPasswordInput).toHaveValue('abc');

    const badConfirmPasswordWarning = screen.getByText('Passwords must match');
    expect(badConfirmPasswordWarning).toBeInTheDocument();

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await user.clear(emailInput);
    await user.type(emailInput, 'test@example.com');
    expect(badEmailWarning).not.toBeInTheDocument();

    await user.clear(passwordInput);
    await user.type(passwordInput, '123456789');
    expect(badPasswordWarning).not.toBeInTheDocument();

    await user.clear(confirmPasswordInput);
    await user.type(confirmPasswordInput, '123456789');
    expect(badConfirmPasswordWarning).not.toBeInTheDocument();

    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('resets the password with valid inputs', async () => {
    const user = userEvent.setup();

    render(<SuccessfulReset />);

    const submitButton = screen.getByText('Reset Password', {
      selector: 'button',
    });

    const [emailInput, passwordInput, confirmPasswordInput] =
      necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

    await user.type(emailInput, 'test@example.com');

    await user.type(passwordInput, '123456789');

    await user.type(confirmPasswordInput, '123456789');

    await user.click(submitButton);

    await waitForQuery();

    const success = screen.getByText('Success!');
    expect(success).toBeInTheDocument();
  });

  it('fails with an error message on a bad token', async () => {
    const user = userEvent.setup();

    render(<FailedReset />);

    const submitButton = screen.getByText('Reset Password', {
      selector: 'button',
    });

    const [emailInput, passwordInput, confirmPasswordInput] =
      necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

    await user.type(emailInput, 'test@example.com');

    await user.type(passwordInput, '123456789');

    await user.type(confirmPasswordInput, '123456789');

    await user.click(submitButton);

    await waitForQuery();

    const error = screen.getByText(resetFailed);
    expect(error).toBeInTheDocument();
  });

  it('fails with an error message on an expired token', async () => {
    const user = userEvent.setup();

    render(<ExpiredToken />);

    const submitButton = screen.getByText('Reset Password', {
      selector: 'button',
    });

    const [emailInput, passwordInput, confirmPasswordInput] =
      necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

    await user.type(emailInput, 'test@example.com');

    await user.type(passwordInput, '123456789');

    await user.type(confirmPasswordInput, '123456789');

    await user.click(submitButton);

    await waitForQuery();

    const error = screen.getByText(expiredToken);
    expect(error).toBeInTheDocument();
  });

  it('fails with an error message on an already redeemed token', async () => {
    const user = userEvent.setup();

    render(<AlreadyRedeemedToken />);

    const submitButton = screen.getByText('Reset Password', {
      selector: 'button',
    });

    const [emailInput, passwordInput, confirmPasswordInput] =
      necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

    await user.type(emailInput, 'test@example.com');

    await user.type(passwordInput, '123456789');

    await user.type(confirmPasswordInput, '123456789');

    await user.click(submitButton);

    await waitForQuery();

    const error = screen.getByText(redeemedToken);
    expect(error).toBeInTheDocument();
  });
});
