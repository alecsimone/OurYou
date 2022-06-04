import { useMutation } from '@apollo/client';
import { ReactNode } from 'react';
import FormField from 'components/foundation/Form/FormField';
import useForm from 'components/foundation/Form/useForm';
import INITIAL_MEMBER_QUERY from 'utils/initialMemberQuery';
import LOG_IN_MUTATION from './logInMutation';

interface logInFormStateInterface {
  email: string;
  password: string;
}

const initialState = {
  email: '',
  password: '',
};

const useLogIn = (): [(children: ReactNode) => JSX.Element, JSX.Element[]] => {
  const [logIn] = useMutation<logInFormStateInterface, logInFormStateInterface>(
    LOG_IN_MUTATION,
    {
      refetchQueries: [
        {
          query: INITIAL_MEMBER_QUERY,
        },
      ],
    }
  );

  const [formState, handleFormUpdate, formCreator] =
    useForm<logInFormStateInterface>(initialState, logIn, undefined, 'Log In');

  const { email, password } = formState;

  const emailField = (
    <FormField
      key="email"
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
  );

  const passwordField = (
    <FormField
      key="password"
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
  );

  const formFields = [emailField, passwordField];

  return [formCreator, formFields];
};

export default useLogIn;
