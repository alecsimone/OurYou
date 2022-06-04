import cookieWarning from '../cookieWarning';
import StyledSignUp from '../SignUp/StyledSignUp';
import useLogIn from './useLogIn';

// interface LogInProps {}

const LogIn = (): JSX.Element => {
  const [formCreator, formFields] = useLogIn();

  return (
    <StyledSignUp>
      {formCreator(formFields)}
      <p className="cookieWarning">{cookieWarning}</p>
    </StyledSignUp>
  );
};

export default LogIn;
