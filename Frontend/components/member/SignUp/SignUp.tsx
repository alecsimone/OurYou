import cookieWarning from '../cookieWarning';
import StyledSignUp from './StyledSignUp';
import useSignUp from './useSignUp';

interface SignUpProps {
  closeModal?: () => void;
}

const SignUp = ({ closeModal }: SignUpProps): JSX.Element => {
  const [formCreator, formFields] = useSignUp(closeModal);

  return (
    <StyledSignUp>
      {formCreator(formFields)}
      <p className="cookieWarning">{cookieWarning}</p>
    </StyledSignUp>
  );
};

export default SignUp;
