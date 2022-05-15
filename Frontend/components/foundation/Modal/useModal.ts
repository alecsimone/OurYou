import { useEffect } from 'react';

const useModal = (close: () => void): void => {
  const keyboardHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyboardHandler);
    return () => window.removeEventListener('keydown', keyboardHandler);
  }, []);
};

export default useModal;
