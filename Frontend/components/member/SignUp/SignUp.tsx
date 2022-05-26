import Button from '@styles/extendableElements/Button';
import Input from '@styles/extendableElements/Input';
import Error from 'components/foundation/Error';
import cookieWarning from '../cookieWarning';
import StyledSignUp from './StyledSignUp';
import useSignUp from './useSignUp';

interface SignUpProps {
  closeModal?: () => void;
}

const SignUp = ({ closeModal }: SignUpProps): JSX.Element => {
  const [formState, handleFormUpdate, submitForm, signUpError] =
    useSignUp(closeModal);

  const { displayName, email, password, confirmPassword } = formState;

  return (
    <StyledSignUp onSubmit={submitForm}>
      {signUpError && <Error error={signUpError} />}
      <fieldset>
        <div className="inputWrapper">
          <Input
            type="text"
            required
            name="displayName"
            placeholder="Display Name"
            minLength={3}
            maxLength={24}
            value={displayName}
            onChange={handleFormUpdate}
          />
          <div className="requirements">
            Display Name must be at least 3 characters long
          </div>
        </div>
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
        <div className="inputWrapper">
          <Input
            type="password"
            required
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleFormUpdate}
            pattern={`${password}`}
            title="Confirmed password must be the same as the Password field"
          />
          <div className="requirements">Passwords must match</div>
        </div>
        <Button type="submit">Sign Up</Button>
      </fieldset>
      <p className="cookieWarning">{cookieWarning}</p>
    </StyledSignUp>
  );
};

export default SignUp;
