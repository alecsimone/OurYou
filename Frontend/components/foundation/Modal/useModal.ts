import { useEffect, useState } from 'react';

const useModal = (): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const keyboardHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyboardHandler);
    if (!isOpen) {
      // I think because the component returns null it doesn't unmount, so the cleanup function doesn't run. But we want to turn off the listener if the modal is closed.
      window.removeEventListener('keydown', keyboardHandler);
    }
    return () => window.removeEventListener('keydown', keyboardHandler);
  }, [isOpen]);

  return [isOpen, closeModal];
};

export default useModal;
