import { render, screen } from '@testing-library/react';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import ErrorAlert from './ErrorAlert';

describe('Error', () => {
  const errorString = 'Something went terribly wrong!';
  it('renders the error message when passed a string as a prop', () => {
    render(
      <MockProviders>
        <ErrorAlert error={errorString} />
      </MockProviders>
    );

    const error = screen.getByText(errorString);
    expect(error).toBeInTheDocument();
  });

  const errorObject = {
    message: errorString,
  };
  it('renders the error message when passed an object with a message property as a prop', () => {
    render(
      <MockProviders>
        <ErrorAlert error={errorObject} />
      </MockProviders>
    );

    const error = screen.getByText(errorString);
    expect(error).toBeInTheDocument();
  });
});
