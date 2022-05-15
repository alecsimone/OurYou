import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Providers from 'components/foundation/Providers';
import Modal from './Modal';

describe('Modal', () => {
  const modalText = 'The Modal Component';

  const close = jest.fn(() => {});

  it('Exists and calls close with the button', async () => {
    const user = userEvent.setup();
    render(
      <Providers>
        <Modal close={close}>
          <div>{modalText}</div>
        </Modal>
      </Providers>
    );

    const modal = screen.getByText(modalText);
    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByTitle('Close');
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);
    expect(close.mock.calls.length).toBe(1);
  });

  it('Exists and calls close with the escape key', async () => {
    const user = userEvent.setup();
    render(
      <Providers>
        <Modal close={close}>
          <div>{modalText}</div>
        </Modal>
      </Providers>
    );

    const modal = screen.getByText(modalText);
    expect(modal).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(close.mock.calls.length).toBe(2);
  });
});
