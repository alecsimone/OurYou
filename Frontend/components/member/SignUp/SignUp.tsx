import StyledSignUp from './StyledSignUp';
import useSignUp from './useSignUp';

interface SignUpProps {
  closeModal?: () => void;
}

const SignUp = ({ closeModal }: SignUpProps): JSX.Element => {
  const [formCreator, formFields] = useSignUp(closeModal);

  return <StyledSignUp>{formCreator(formFields)}</StyledSignUp>;
};

export default SignUp;
