import { useState } from 'react';
import Modal from '../Modal';

interface ErrorProps {
  error: string | { message: string };
}

const Error = ({ error }: ErrorProps): JSX.Element | null => {
  const [showingModal, setShowingModal] = useState(true);

  let errorMessage: string;
  if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = error.message;
  }

  if (showingModal) {
    return (
      <Modal
        close={() => setShowingModal(false)}
        type="error"
      >
        <div className="errorBox">
          <h4>Error:</h4>
          <div className="message">{errorMessage}</div>
        </div>
      </Modal>
    );
  }
  return null;
};

export default Error;
