import { render, screen } from '@testing-library/react';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import SignUp from './SignUp';

describe('SignUp', () => {
  it('renders the necessary form fields', () => {
    const necessaryFormFields = [
      'Display Name',
      'Email',
      'Password',
      'Confirm Password',
    ];

    render(
      <MockProviders>
        <SignUp />
      </MockProviders>
    );

    necessaryFormFields.forEach((field) => {
      const input = screen.getByPlaceholderText(field);
      expect(input).toBeInTheDocument();
    });
  });
});
