import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import RequestReset from './RequestReset';

describe('RequestReset', () => {
  it('renders the necessary form fields and lets the user type in them', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders>
        <RequestReset />
      </MockProviders>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();

    await user.type(emailInput, 'test string');
    expect(emailInput).toHaveValue('test string');
  });

  it('disables the submit button if all inputs are not valid', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders>
        <RequestReset />
      </MockProviders>
    );

    const submitButton = screen.getByText('Request Reset', {
      selector: 'button',
    });
    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    const emailInput = screen.getByPlaceholderText('Email');

    await user.type(emailInput, 'ab');
    expect(emailInput).toHaveValue('ab');

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'test@example.com');

    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });
});
