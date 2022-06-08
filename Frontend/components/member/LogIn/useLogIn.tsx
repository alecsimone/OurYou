import { useMutation } from '@apollo/client';
import { ReactNode, useState } from 'react';
import useForm from 'components/foundation/Form/useForm';
import INITIAL_MEMBER_QUERY from 'utils/member/initialMemberQuery';
import {
  makeEmailField,
  makePasswordField,
} from 'components/foundation/Form/fieldGenerators';
import { didLoginWork } from '../FinishReset/constants';
import LOG_IN_MUTATION from './logInMutation';
import { logInFormStateInterface, logInResult } from './types';

const initialState: logInFormStateInterface = {
  email: '',
  password: '',
};

const useLogIn = (): [
  (children: ReactNode) => JSX.Element,
  JSX.Element[],
  boolean,
  { message: string } | null
] => {
  const [logInError, setLogInError] = useState<{ message: string } | null>(
    null
  );
  const [logInSuccess, setLogInSuccess] = useState(false);

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

  const [formState, handleFormUpdate, formCreator] =
    useForm<logInFormStateInterface>(initialState, logIn, undefined, 'Log In');

  const { email, password } = formState;

  const formFields = [
    makeEmailField(email, handleFormUpdate),
    makePasswordField(password, handleFormUpdate),
  ];

  return [formCreator, formFields, logInSuccess, logInError];
};

export default useLogIn;
