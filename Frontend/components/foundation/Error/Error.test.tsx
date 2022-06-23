/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import { Basic, Blank, FromString } from './Error.stories';

const errorString = 'Something went terribly wrong!';

describe('Error', () => {
  it('renders the error message when passed an object with a message property as a prop', () => {
    render(
      <MockProviders>
        <Basic {...Basic.args} />
      </MockProviders>
    );

    const error = screen.getByText(errorString);
    expect(error).toBeInTheDocument();
  });

  it('renders the error message when passed a string as a prop', () => {
    render(
      <MockProviders>
        <FromString {...FromString.args} />
      </MockProviders>
    );

    const error = screen.getByText(errorString);
    expect(error).toBeInTheDocument();
  });

  it('renders nothing when not passed a string or an object with a message property', () => {
    render(
      <MockProviders>
        <Blank {...Blank.args} />
      </MockProviders>
    );

    const error = screen.queryByText(/error/i);
    expect(error).not.toBeInTheDocument();
  });
});
