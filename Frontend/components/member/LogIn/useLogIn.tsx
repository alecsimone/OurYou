import { useMutation } from '@apollo/client';
import { ReactNode, useState } from 'react';
import useForm from 'components/foundation/Form/useForm';
import INITIAL_MEMBER_QUERY from 'utils/member/initialMemberQuery';
import {
  makeEmailField,
  makePasswordField,
} from 'components/foundation/Form/fieldGenerators';
import LOG_IN_MUTATION from './logInMutation';

interface logInFormStateInterface {
  email: string;
  password: string;
}
export type { logInFormStateInterface };

interface logInResult {
  authenticateMemberWithPassword: {
    __typename:
      | 'MemberAuthenticationWithPasswordFailure'
      | 'MemberAuthenticationWithPasswordSuccess';
  };
}
export type { logInResult };

const initialState = {
  email: '',
  password: '',
};

const useLogIn = (): [
  (children: ReactNode) => JSX.Element,
  JSX.Element[],
  { message: string } | null
] => {
  const [logInError, setLogInError] = useState<{ message: string } | null>(
    null
  );

  const [logIn] = useMutation<logInResult, logInFormStateInterface>(
    LOG_IN_MUTATION,
    {
      refetchQueries: [
        {
          query: INITIAL_MEMBER_QUERY,
        },
      ],
      onCompleted: (d) => {
        if (
          d?.authenticateMemberWithPassword?.__typename ===
          'MemberAuthenticationWithPasswordFailure'
        ) {
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

  return [formCreator, formFields, logInError];
};

export default useLogIn;
