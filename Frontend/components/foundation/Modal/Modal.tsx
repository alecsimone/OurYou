import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import FunctionalIcon from '@icons/FunctionalIcon';
import X from '@icons/X';
import StyledModal from './StyledModal';
import useModal from './useModal';

interface ModalProps {
  close: () => void; // The function that closes the modal. Needs to come from the component that creates the modal so that it knows the modal has been closed.
  children: ReactNode;
  type?: 'error';
}

const Modal = ({ close, children, type }: ModalProps): JSX.Element | null => {
  useModal(close);

  const modalElement = (
    <StyledModal>
      <div className={`modalMolder ${type}`}>
        {children}
        <FunctionalIcon
          iconName="closeModal"
          titleTextReplacement="Close"
          onTrigger={close}
        >
          <X />
        </FunctionalIcon>
      </div>
    </StyledModal>
  );

  let modalHolder = document.getElementById('modalHolder');

  if (modalHolder == null) {
    // If we didn't find a modalHolder for some reason, let's create one. And in case there's no document object, we'll just spit out the modalElement, because we're clearly already in a real weird environment.
    if (document == null) return modalElement;
    modalHolder = document.createElement('section');
    modalHolder.setAttribute('id', 'modalHolder');
    document.body.appendChild(modalHolder);
  }

  return createPortal(modalElement, modalHolder);
};

export default Modal;
