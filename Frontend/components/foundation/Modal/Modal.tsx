import FunctionalIcon from '@icons/FunctionalIcon';
import X from '@icons/X';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import StyledModal from './StyledModal';
import useModal from './useModal';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps): JSX.Element | null => {
  const [isOpen, closeModal] = useModal();

  if (!isOpen) return null;

  const modalHolder = document.getElementById('modalHolder');

  if (modalHolder == null) return null;

  const modalElement = (
    <StyledModal>
      <div className="modalMolder">
        {children}
        <FunctionalIcon
          iconName="closeModal"
          onClick={closeModal}
        >
          <X />
        </FunctionalIcon>
      </div>
    </StyledModal>
  );

  return createPortal(modalElement, modalHolder);
};

export default Modal;
