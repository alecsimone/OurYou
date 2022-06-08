import { useState } from 'react';
import Button from '@styles/extendableElements/Button';
import Error from 'components/foundation/Error';
import cookieWarning from '../cookieWarning';
import StyledSignUp from '../SignUp/StyledSignUp';
import RequestReset from '../RequestReset';
import useLogIn from './useLogIn';

// interface LogInProps {}

const LogIn = (): JSX.Element => {
  const [formCreator, formFields, logInError] = useLogIn();
  const [showingReset, setShowingReset] = useState(false);

  if (showingReset) {
    return (
      <StyledSignUp>
        <RequestReset />
        <Button
          className="back"
          onClick={() => setShowingReset(false)}
        >
          go back to log in
        </Button>
      </StyledSignUp>
    );
  }

  return (
    <StyledSignUp>
      {logInError && <Error error={logInError} />}
      {formCreator(formFields)}
      <Button
        className="resetPassword"
        onClick={() => setShowingReset(true)}
      >
        Forgot password?
      </Button>
      <p className="cookieWarning">{cookieWarning}</p>
    </StyledSignUp>
  );
};

export default LogIn;
