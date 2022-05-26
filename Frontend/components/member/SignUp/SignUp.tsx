import Button from '@styles/extendableElements/Button';
import Input from '@styles/extendableElements/Input';
import Error from 'components/foundation/Error';
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
            maxLength={24}
            value={displayName}
            onChange={handleFormUpdate}
          />
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
      <p className="cookieWarning">
        When you sign up or log in, we&apos;ll put a cookie on your computer.
        All it contains is an encoded representation of your member ID, so we
        can recognize you. It doesn&apos;t track you or anything like that,
        it&apos;s literally just a string with a property name. By signing up or
        logging in, you&apos;re agreeing to let us put that cookie there.
        Thanks!
      </p>
    </StyledSignUp>
  );
};

export default SignUp;
