import Button from '@styles/extendableElements/Button';
import Error from 'components/foundation/Error';
import FormField from 'components/foundation/Form/FormField';
import cookieWarning from '../cookieWarning';
import StyledSignUp from './StyledSignUp';
import useSignUp from './useSignUp';

interface SignUpProps {
  closeModal?: () => void;
}

const SignUp = ({ closeModal }: SignUpProps): JSX.Element => {
  const [
    formRef,
    formState,
    handleFormUpdate,
    allInputsValid,
    submitForm,
    signUpError,
  ] = useSignUp(closeModal);

  const { displayName, email, password, confirmPassword } = formState;

  return (
    <StyledSignUp
      onSubmit={submitForm}
      ref={formRef}
    >
      {signUpError && <Error error={signUpError} />}
      <fieldset>
        <FormField
          fieldType="input"
          requirements="Display Name must be at least 3 characters long"
          fieldProps={{
            type: 'text',
            required: true,
            name: 'displayName',
            placeholder: 'Display Name',
            minLength: 3,
            maxLength: 24,
            value: displayName,
            onChange: handleFormUpdate,
          }}
        />
        <FormField
          fieldType="input"
          requirements="Must be a valid email address"
          fieldProps={{
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            value: email,
            onChange: handleFormUpdate,
            required: true,
          }}
        />
        <FormField
          fieldType="input"
          requirements="Password must be at least 8 characters long"
          fieldProps={{
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            value: password,
            onChange: handleFormUpdate,
            required: true,
            minLength: 8,
          }}
        />
        <FormField
          fieldType="input"
          requirements="Passwords must match"
          fieldProps={{
            type: 'password',
            name: 'confirmPassword',
            placeholder: 'Confirm Password',
            value: confirmPassword,
            onChange: handleFormUpdate,
            required: true,
            pattern: password,
          }}
        />
        <Button
          type="submit"
          aria-disabled={!allInputsValid}
        >
          Sign Up
        </Button>
      </fieldset>
      <p className="cookieWarning">{cookieWarning}</p>
    </StyledSignUp>
  );
};

export default SignUp;
