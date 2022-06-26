/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Error.stories';

const { Basic, FromString, Blank } = composeStories(stories);

const errorString = 'Something went terribly wrong!';

describe('Error', () => {
  it('renders the error message when passed an object with a message property as a prop', () => {
    render(<Basic {...Basic.args} />);

    const error = screen.getByText(errorString);
    expect(error).toBeInTheDocument();
  });

  it('renders the error message when passed a string as a prop', () => {
    render(<FromString {...FromString.args} />);

    const error = screen.getByText(errorString);
    expect(error).toBeInTheDocument();
  });

  it('renders nothing when not passed a string or an object with a message property', () => {
    render(<Blank {...Blank.args} />);

    const error = screen.queryByText(/error/i);
    expect(error).not.toBeInTheDocument();
  });
});
