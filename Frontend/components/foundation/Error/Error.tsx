import StyledError from './StyledError';

interface ErrorProps {
  error?: string | { message: string } | null;
}

const Error = ({ error }: ErrorProps): JSX.Element | null => {
  if (error == null) return null;

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

  return (
    <StyledError className="errorBox">
      <h4>Error:</h4>
      <div className="message">{errorMessage}</div>
    </StyledError>
  );
};

export default Error;
