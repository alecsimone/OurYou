import { useState } from 'react';
import Modal from '../Modal';
import StyledError from './StyledError';

interface ErrorProps {
  error: string | { message: string };
}

const Error = ({ error }: ErrorProps): JSX.Element | null => {
  const [showingModal, setShowingModal] = useState(true);

  let errorMessage: string;
  if (typeof error === 'string') {
    errorMessage = error;
  } else if (
    typeof error === 'object' &&
    !Array.isArray(error) && // Arrays technically have typeof object, but we don't want them
    error !== null // same for null
  ) {
    if (error.message != null) {
      errorMessage = error.message;
    } else {
      return null;
    }
  } else {
    return null;
  }

  if (showingModal) {
    return (
      <Modal close={() => setShowingModal(false)}>
        <StyledError className="errorBox">
          <h4>Error:</h4>
          <div className="message">{errorMessage}</div>
        </StyledError>
      </Modal>
    );
  }
  return null;
};

export default Error;
