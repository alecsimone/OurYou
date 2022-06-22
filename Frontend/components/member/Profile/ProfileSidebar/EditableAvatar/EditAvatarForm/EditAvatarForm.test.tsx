import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jsdom-worker';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import waitForQuery from 'utils/testing/waitForQuery';
import { mockAvatar } from 'utils/testing/initialMemberMock';
import EditableAvatar from '../EditableAvatar';
import {
  avatarMock,
  mutationErrorMock,
  mutationSuccessMock,
  replacementAvatar,
} from '../queryMocks';

describe('EditableAvatar', () => {
  window.URL.createObjectURL = () => 'test.jpg';

  it("displays the member's avatar and a change avatar button by default", async () => {
    render(
      <MockProviders mocks={avatarMock}>
        <EditableAvatar />
      </MockProviders>
    );

    await waitForQuery();

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toBeInTheDocument();

    const changeButton = screen.getByText('Change Avatar');
    expect(changeButton).toBeInTheDocument();
  });

  it('displays the edit avatar form after clicking the button', async () => {
    const user = userEvent.setup();

    render(
      <MockProviders>
        <EditableAvatar />
      </MockProviders>
    );

    const changeButton = screen.getByText('Change Avatar');
    expect(changeButton).toBeInTheDocument();

    await user.click(changeButton);

    const uploadButton = screen.getByText('Upload Image');
    expect(uploadButton).toBeInTheDocument();

    const linkInput = screen.getByPlaceholderText('Link to image');
    expect(linkInput).toBeInTheDocument();

    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();

    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();

    await user.type(linkInput, 'test');
    expect(linkInput).toHaveValue('test');
  });

  it('closes the edit avatar form when clicking the cancel button', async () => {
    const user = userEvent.setup();

    render(
      <MockProviders>
        <EditableAvatar />
      </MockProviders>
    );

    const changeButton = screen.getByText('Change Avatar');
    expect(changeButton).toBeInTheDocument();

    await user.click(changeButton);

    const uploadButton = screen.getByText('Upload Image');
    expect(uploadButton).toBeInTheDocument();

    const linkInput = screen.getByPlaceholderText('Link to image');
    expect(linkInput).toBeInTheDocument();

    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();

    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();

    await user.click(cancelButton);
    expect(uploadButton).not.toBeInTheDocument();
    expect(linkInput).not.toBeInTheDocument();
    expect(cancelButton).not.toBeInTheDocument();
    expect(submitButton).not.toBeInTheDocument();
  });

  it('disables the submit button when something other than a url is entered in the link input', async () => {
    const user = userEvent.setup();

    render(
      <MockProviders>
        <EditableAvatar />
      </MockProviders>
    );

    const changeButton = screen.getByText('Change Avatar');
    await user.click(changeButton);

    const linkInput = screen.getByPlaceholderText('Link to image');
    const submitButton = screen.getByText('Submit');

    await user.type(linkInput, 'not a url');

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await user.clear(linkInput);

    await user.type(linkInput, 'https://www.reddit.com');
    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('can add and remove file uploads', async () => {
    const user = userEvent.setup();
    const fileName = 'test.jpg';

    render(
      <MockProviders>
        <EditableAvatar />
      </MockProviders>
    );

    const changeButton = screen.getByText('Change Avatar');
    expect(changeButton).toBeInTheDocument();

    await user.click(changeButton);

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

    await user.click(removeButton);
    expect(preview).not.toBeInTheDocument();
  });

  it('shows an error when both a link is entered and a file is uploaded', async () => {
    const user = userEvent.setup();

    render(
      <MockProviders>
        <EditableAvatar />
      </MockProviders>
    );

    const changeButton = screen.getByText('Change Avatar');
    expect(changeButton).toBeInTheDocument();

    await user.click(changeButton);

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
    const user = userEvent.setup();

    render(
      <MockProviders mocks={avatarMock}>
        <EditableAvatar />
      </MockProviders>
    );

    const changeButton = screen.getByText('Change Avatar');
    await user.click(changeButton);

    const linkInput = screen.getByPlaceholderText('Link to image');
    const submitButton = screen.getByText('Submit');

    await user.type(linkInput, mockAvatar);

    expect(submitButton).toHaveAttribute('aria-disabled', 'true');

    await user.clear(linkInput);

    await user.type(linkInput, 'https://www.reddit.com');
    expect(submitButton).toHaveAttribute('aria-disabled', 'false');
  });

  it('shows errors to the user', async () => {
    const user = userEvent.setup();

    const combinedMocks = [...avatarMock, ...mutationErrorMock];

    render(
      <MockProviders mocks={combinedMocks}>
        <EditableAvatar />
      </MockProviders>
    );

    await waitForQuery();

    const changeButton = screen.getByText('Change Avatar');
    await user.click(changeButton);

    const linkInput = screen.getByPlaceholderText('Link to image');
    const submitButton = screen.getByText('Submit');

    await user.type(linkInput, 'https://www.reddit.com');
    await user.click(submitButton);

    await waitForQuery();

    const error = screen.getByText(/Avatar must be an image/);
    expect(error).toBeInTheDocument();
  });

  it('successfully changes the avatar', async () => {
    const user = userEvent.setup();

    const combinedMocks = [...avatarMock, ...mutationSuccessMock];

    render(
      <MockProviders mocks={combinedMocks}>
        <EditableAvatar />
      </MockProviders>
    );

    const changeButton = screen.getByText('Change Avatar');
    await user.click(changeButton);

    const linkInput = screen.getByPlaceholderText('Link to image');
    const submitButton = screen.getByText('Submit');

    await user.type(linkInput, replacementAvatar);
    await user.click(submitButton);

    await waitForQuery();

    const avatar = screen.getByAltText('avatar');
    expect(avatar).toHaveAttribute('src', replacementAvatar);
  });
});
