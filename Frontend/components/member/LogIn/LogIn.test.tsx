import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import LogIn from './LogIn';

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

  it('disables the submit button if all inputs are not valid', async () => {
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

    await user.type(passwordInput, 'ab');
    expect(passwordInput).toHaveValue('ab');

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'test@example.com');

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, '123456789');

    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });
});
