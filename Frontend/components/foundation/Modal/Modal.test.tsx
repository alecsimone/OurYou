import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Providers from '../Providers';
import Modal from './Modal';

describe('Modal', () => {
  const modalText = 'The Modal Component';

  it('Exists and closes itself with the close button', async () => {
    const user = userEvent.setup();
    render(
      <Providers>
        <Modal>
          <div>{modalText}</div>
        </Modal>
      </Providers>
    );

    const modal = screen.getByText(modalText);
    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByTitle('Close');
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);
    expect(modal).not.toBeInTheDocument();
  });

  it('Exists and closes itself with the escape key', async () => {
    const user = userEvent.setup();
    render(
      <Providers>
        <Modal>
          <div>{modalText}</div>
        </Modal>
      </Providers>
    );

    const modal = screen.getByText(modalText);
    expect(modal).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(modal).not.toBeInTheDocument();
  });
});
