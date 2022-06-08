import Error from 'components/foundation/Error';
import cookieWarning from '../cookieWarning';
import StyledSignUp from './StyledSignUp';
import useSignUp from './useSignUp';

interface SignUpProps {
  closeModal?: () => void;
}

const SignUp = ({ closeModal }: SignUpProps): JSX.Element => {
  const [formCreator, formFields, signUpError] = useSignUp(closeModal);

  return (
    <StyledSignUp>
      {signUpError && <Error error={signUpError} />}
      {formCreator(formFields)}
      <p className="cookieWarning">{cookieWarning}</p>
    </StyledSignUp>
  );
};

export default SignUp;
