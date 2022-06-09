import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import waitForQuery from 'utils/testing/waitForQuery';
import LogIn from './LogIn';
import { invalidLoginMock, validLoginMock } from './mutationMocks';

const necessaryFormFields = ['Email', 'Password'];

describe('SignUp', () => {
  it('renders the necessary form fields and lets the user type in them', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders>
        <LogIn />
      </MockProviders>
    );

    const [emailInput, passwordInput] = necessaryFormFields.map((field) =>
      screen.getByPlaceholderText(field)
    );

    await user.type(emailInput, 'test string');
    await user.type(passwordInput, 'test string');

    necessaryFormFields.forEach(async (field) => {
      const input = screen.getByPlaceholderText(field);
      expect(input).toBeInTheDocument();

      expect(input).toHaveValue('test string');
    });
  });

  it('disables the submit button if all inputs are not valid and tells the user why', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders>
        <LogIn />
      </MockProviders>
    );

    const submitButton = screen.getByText('Log In', { selector: 'button' });
    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    const [emailInput, passwordInput] = necessaryFormFields.map((field) =>
      screen.getByPlaceholderText(field)
    );

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

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await user.clear(emailInput);
    await user.type(emailInput, 'test@example.com');
    expect(badEmailWarning).not.toBeInTheDocument();

    await user.clear(passwordInput);
    await user.type(passwordInput, '123456789');
    expect(badPasswordWarning).not.toBeInTheDocument();

    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('alerts the user when they enter an invalid login', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders mocks={invalidLoginMock}>
        <LogIn />
      </MockProviders>
    );

    const submitButton = screen.getByText('Log In', { selector: 'button' });

    const [emailInput, passwordInput] = necessaryFormFields.map((field) =>
      screen.getByPlaceholderText(field)
    );

    await user.type(emailInput, 'test@example.com');

    await user.type(passwordInput, '123456789');

    await user.click(submitButton);

    await waitForQuery();

    const error = screen.getByText(
      'No member found for that email and password combination'
    );
    expect(error).toBeInTheDocument();
  });

  it('logs in the user when they enter a valid login', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders mocks={validLoginMock}>
        <LogIn />
      </MockProviders>
    );
    const submitButton = screen.getByText('Log In', { selector: 'button' });
    expect(submitButton).toBeInTheDocument();

    const [emailInput, passwordInput] = necessaryFormFields.map((field) =>
      screen.getByPlaceholderText(field)
    );

    await user.type(emailInput, 'test@example.com');

    await user.type(passwordInput, '123456789');

    await user.click(submitButton);

    await waitForQuery();

    const success = screen.getByText('Success!');
    expect(success).toBeInTheDocument();
  });
});
