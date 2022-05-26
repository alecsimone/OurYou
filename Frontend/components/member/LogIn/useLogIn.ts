import { ApolloError, useMutation } from '@apollo/client';
import {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
} from 'react';
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

const useLogIn = (): [
  logInFormStateInterface,
  ChangeEventHandler<HTMLInputElement>,
  FormEventHandler<HTMLFormElement>,
  ApolloError | { message: string } | null
] => {
  const [formState, setFormState] = useState(initialState);
  const { email, password } = formState;

  const [logInError, setLogInError] = useState<
    ApolloError | { message: string } | null
  >(null);

  const [logIn] = useMutation(LOG_IN_MUTATION, {
    variables: {
      email,
      password,
    },
    refetchQueries: [
      {
        query: INITIAL_MEMBER_QUERY,
      },
    ],
    // eslint-disable-next-line no-alert
    onError: (e) => setLogInError(e),
    onCompleted: (d) => {
      if (
        d?.authenticateMemberWithPassword?.__typename ===
        'MemberAuthenticationWithPasswordSuccess'
      ) {
        setFormState(initialState);
      } else if (
        d?.authenticateMemberWithPassword?.__typename ===
        'MemberAuthenticationWithPasswordFailure'
      ) {
        setLogInError({
          message: 'No member found for that email and password combination',
        });
      }
    },
  });

  const handleFormUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    logIn();
  };

  return [formState, handleFormUpdate, submitForm, logInError];
};

export default useLogIn;
