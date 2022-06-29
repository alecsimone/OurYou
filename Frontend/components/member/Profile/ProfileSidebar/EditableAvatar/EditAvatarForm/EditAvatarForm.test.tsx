import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import waitForQuery from 'utils/testing/waitForQuery';
import { mockAvatar } from 'utils/testing/initialMemberMock';
import * as stories from './EditAvatarForm.stories';

const { Basic } = composeStories(stories);

describe('EditAvatarForm', () => {
  window.URL.createObjectURL = () => 'test.jpg';
  const user = userEvent.setup();
  const fileName = 'test.jpg';

  it('disables the submit button when something other than a url is entered in the link input', async () => {
    render(<Basic />);

    const linkInput = screen.getByPlaceholderText('Link to image');
    const submitButton = screen.getByText('Submit');

    await user.type(linkInput, 'not a url');

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await user.clear(linkInput);

    await user.type(linkInput, 'https://www.reddit.com');
    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('can add and remove file uploads', async () => {
    render(<Basic />);

    const uploadButton = screen.getByText('Upload Image');

    const str = JSON.stringify({
      name: fileName,
      size: 100,
    });
    const blob = new Blob([str]);
    const file = new File([blob], fileName, {
      type: 'image/jpg',
    });

    await user.upload(uploadButton, file);

    const preview = screen.getByText(fileName);
    expect(preview).toBeInTheDocument();

    const removeButton = screen.getByTitle('RemoveMedia');
    expect(removeButton).toBeInTheDocument();

    const changeUpload = screen.getByText('Change Upload');
    expect(changeUpload).toBeInTheDocument();

    await user.click(removeButton);
    expect(preview).not.toBeInTheDocument();
  });

  it('shows an error when both a link is entered and a file is uploaded', async () => {
    render(<Basic />);

    const uploadButton = screen.getByText('Upload Image');
    const linkInput = screen.getByPlaceholderText('Link to image');

    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();

    await user.type(linkInput, 'https://www.reddit.com');
    expect(submitButton).toHaveAttribute('aria-disabled', 'false');

    const str = JSON.stringify({
      name: 'test.jpg',
      size: 100,
    });
    const blob = new Blob([str]);
    const file = new File([blob], 'values.json', {
      type: 'image/jpg',
    });

    await user.upload(uploadButton, file);

    const error = screen.getByText(
      /You have both entered a link and uploaded a file, please enter only one/i
    );
    expect(error).toBeInTheDocument();
  });

  it('disables the submit button when the entered link is the same as the current avatar', async () => {
    render(<Basic />);

    const linkInput = screen.getByPlaceholderText('Link to image');
    const submitButton = screen.getByText('Submit');

    await user.type(linkInput, mockAvatar);

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await user.clear(linkInput);

    await user.type(linkInput, 'https://www.reddit.com');
    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('shows errors to the user', async () => {
    render(<Basic />);

    await waitForQuery();

    const linkInput = screen.getByPlaceholderText('Link to image');
    const submitButton = screen.getByText('Submit');

    await user.type(linkInput, 'https://www.reddit.com');
    await user.click(submitButton);

    await waitForQuery();

    const error = screen.getByText(/Avatar must be an image/);
    expect(error).toBeInTheDocument();
  });
});
