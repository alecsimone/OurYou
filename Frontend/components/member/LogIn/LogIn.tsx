import Button from '@styles/extendableElements/Button';
import Input from '@styles/extendableElements/Input';
import Error from 'components/foundation/Error';
import StyledSignUp from '../SignUp/StyledSignUp';
import useLogIn from './useLogIn';

// interface LogInProps {}

const LogIn = (): JSX.Element => {
  const [formState, handleFormUpdate, submitForm, logInError] = useLogIn();
  const { email, password } = formState;
  return (
    <StyledSignUp onSubmit={submitForm}>
      {logInError && <Error error={logInError} />}
      <fieldset>
        <div className="inputWrapper">
          <Input
            type="email"
            required
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleFormUpdate}
          />
          <div className="requirements">Must be a valid email address</div>
        </div>
        <div className="inputWrapper">
          <Input
            type="password"
            required
            name="password"
            placeholder="Password"
            value={password}
            minLength={8}
            onChange={handleFormUpdate}
          />
          <div className="requirements">
            Password must be at least 8 characters long
          </div>
        </div>
        <Button type="submit">Log In</Button>
      </fieldset>
    </StyledSignUp>
  );
};

export default LogIn;
