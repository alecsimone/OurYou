import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockProviders from '../MockProviders';
import Modal from './Modal';

describe('Modal', () => {
  const modalText = 'The Modal Component';

  const close = jest.fn(() => {});

  it('exists and calls close with the button', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders>
        <Modal close={close}>
          <div>{modalText}</div>
        </Modal>
      </MockProviders>
    );

    const modal = screen.getByText(modalText);
    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByTitle('Close');
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);
    expect(close).toBeCalledTimes(1);

    const icon = closeButton.closest('svg');
    icon?.focus();

    await user.keyboard('{Enter}');
    expect(close).toBeCalledTimes(2);

    await user.keyboard(' ');
    expect(close).toBeCalledTimes(3);
  });

  it('exists and calls close with the escape key', async () => {
    const user = userEvent.setup();
    render(
      <MockProviders>
        <Modal close={close}>
          <div>{modalText}</div>
        </Modal>
      </MockProviders>
    );

    const modal = screen.getByText(modalText);
    expect(modal).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(close).toBeCalledTimes(4);
  });
});
