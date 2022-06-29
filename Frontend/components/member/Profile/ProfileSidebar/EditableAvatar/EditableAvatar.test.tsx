import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jsdom-worker';
import MockProviders from 'components/foundation/MockProviders';
import '@testing-library/jest-dom';
import waitForQuery from 'utils/testing/waitForQuery';
import {
  avatarMock,
  mutationSuccessMock,
  replacementAvatar,
} from './queryMocks';
import EditableAvatar from '.';

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
      <MockProviders mocks={avatarMock}>
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
