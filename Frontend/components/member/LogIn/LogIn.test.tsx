import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import LogIn from './LogIn';

describe('SignUp', () => {
  it('renders the necessary form fields and lets the user type in them', async () => {
    const necessaryFormFields = ['Email', 'Password'];

    const user = userEvent.setup();

    render(
      <MockProviders>
        <LogIn />
      </MockProviders>
    );

    necessaryFormFields.forEach(async (field) => {
      const input = screen.getByPlaceholderText(field);
      expect(input).toBeInTheDocument();

      await user.type(input, 'test string');
      expect(input).toHaveValue('test string');
    });
  });
});
