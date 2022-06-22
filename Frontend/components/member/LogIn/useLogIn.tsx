import { useMutation } from '@apollo/client';
import { useState } from 'react';
import useForm from 'components/foundation/Form/useForm';
import INITIAL_MEMBER_QUERY from 'utils/member/initialMemberQuery';
import { didLoginWork } from '../FinishReset/constants';
import LOG_IN_MUTATION from './logInMutation';
import { logInFormStateInterface, logInResult } from './types';
import EmailField from 'components/foundation/Form/FormFields/EmailField';
import PasswordField from 'components/foundation/Form/FormFields/PasswordField';

const initialState: logInFormStateInterface = {
  email: '',
  password: '',
};

const useLogIn = (): [JSX.Element, boolean, { message: string } | null] => {
  // Because Keystone's log in mutation sends error data as a success message, we have to handle it specially here instead of letting the form from useForm handle it. So we make an error message state to hold that successful error message
  const [logInError, setLogInError] = useState<{ message: string } | null>(
    null
  );

  // We also want a success state so we can show a success message if the log in is successful.
  const [logInSuccess, setLogInSuccess] = useState(false);

  // Our log in mutation, which refetches all the data we need for the newly logged in member and shows them their success or error message
  const [logIn] = useMutation<logInResult, logInFormStateInterface>(
    LOG_IN_MUTATION,
    {
      refetchQueries: [
        {
          query: INITIAL_MEMBER_QUERY,
        },
      ],
      onCompleted: (d) => {
        if (didLoginWork(d)) {
          setLogInSuccess(true);
        } else {
          setLogInError({
            message: 'No member found for that email and password combination',
          });
        }
      },
    }
  );

  // Get our form pieces
  const [formState, handleFormUpdate, formCreator] =
    useForm<logInFormStateInterface>(initialState, logIn, undefined, 'Log In');

  // Make our form fields
  const { email, password } = formState;
  const formFields = [
    <EmailField
      value={email}
      onChange={handleFormUpdate}
    />,
    <PasswordField
      value={password}
      onChange={handleFormUpdate}
    />,
  ];

  const form = formCreator(formFields);

  // Send back our form and our success and error messages
  return [form, logInSuccess, logInError];
};

export default useLogIn;
