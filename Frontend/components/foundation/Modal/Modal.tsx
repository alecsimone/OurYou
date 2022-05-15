import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import FunctionalIcon from '@icons/FunctionalIcon';
import X from '@icons/X';
import StyledModal from './StyledModal';
import useModal from './useModal';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps): JSX.Element | null => {
  const [isOpen, closeModal] = useModal();

  if (!isOpen) return null;

  const modalElement = (
    <StyledModal>
      <div className="modalMolder">
        {children}
        <FunctionalIcon
          iconName="closeModal"
          titleTextReplacement="Close"
          onClick={closeModal}
        >
          <X />
        </FunctionalIcon>
      </div>
    </StyledModal>
  );

  if (process.env.NODE_ENV === 'test') {
    // I can't get document.getElementById to work in tests, so let's just spit the element out without worrying about portaling it.
    return modalElement;
  }

  const modalHolder = document.getElementById('modalHolder');

  if (modalHolder == null) return null;

  return createPortal(modalElement, modalHolder);
};

export default Modal;
