import { useState } from 'react';
import Button from '@styles/extendableElements/Button';
import Modal from 'components/foundation/Modal';
import StyledMemberBox from './StyledMemberBox';

// interface LoggedOutMemberBoxProps {}

const LoggedOutMemberBox = (): JSX.Element => {
  const [showingSignUp, setShowingSignUp] = useState(false);

  return (
    <StyledMemberBox>
      <Button
        className="signUp"
        onClick={() => setShowingSignUp(true)}
      >
        Sign up or Log in
      </Button>
      {showingSignUp && (
        <Modal close={() => setShowingSignUp(false)}>
          Sign up and Log in forms
        </Modal>
      )}
    </StyledMemberBox>
  );
};

export default LoggedOutMemberBox;
