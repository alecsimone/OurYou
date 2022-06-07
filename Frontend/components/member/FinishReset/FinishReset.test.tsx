import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import FinishReset from './FinishReset';

const necessaryFormFields = ['Email', 'Password', 'Confirm Password'];

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  pathname: '/reset',
  query: {
    code: 'test',
  },
}));

describe('SignUp', () => {
  it('renders the necessary form fields and lets the user type in them', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders>
        <FinishReset />
      </MockProviders>
    );

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

  it('disables the submit button if all inputs are not valid', async () => {
    const user = userEvent.setup();

    render(
      <MockProviders>
        <FinishReset />
      </MockProviders>
    );

    const submitButton = screen.getByText('Reset Password', {
      selector: 'button',
    });
    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    const [emailInput, passwordInput, confirmPasswordInput] =
      necessaryFormFields.map((field) => screen.getByPlaceholderText(field));

    await user.type(emailInput, 'ab');
    expect(emailInput).toHaveValue('ab');

    await user.type(passwordInput, 'ab');
    expect(passwordInput).toHaveValue('ab');

    await user.type(confirmPasswordInput, 'ab');
    expect(confirmPasswordInput).toHaveValue('ab');

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'test@example.com');

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, '123456789');

    await userEvent.clear(confirmPasswordInput);
    await userEvent.type(confirmPasswordInput, '123456789');

    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });
});