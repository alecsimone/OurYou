import { useState } from 'react';
import Button from '@styles/extendableElements/Button';
import Modal from 'components/foundation/Modal';
import SignUp from 'components/member/SignUp/SignUp';
import LogIn from 'components/member/LogIn/LogIn';
import StyledMemberBox from './StyledMemberBox';

// interface LoggedOutMemberBoxProps {}

const LoggedOutMemberBox = (): JSX.Element => {
  const [showingSignUp, setShowingSignUp] = useState(false);
  const [showingLogIn, setShowingLogIn] = useState(false);

  return (
    <StyledMemberBox>
      <Button
        className="prompt signUp"
        onClick={() => setShowingSignUp(true)}
      >
        Sign up
      </Button>
      or
      <Button
        className="prompt logIn"
        onClick={() => setShowingLogIn(true)}
      >
        Log in
      </Button>
      {showingSignUp && (
        <Modal close={() => setShowingSignUp(false)}>
          <SignUp closeModal={() => setShowingSignUp(false)} />
        </Modal>
      )}
      {showingLogIn && (
        <Modal close={() => setShowingLogIn(false)}>
          <LogIn />
        </Modal>
      )}
    </StyledMemberBox>
  );
};

export default LoggedOutMemberBox;
