import { useMutation } from '@apollo/client';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import useForm from 'components/foundation/Form/useForm';
import INITIAL_MEMBER_QUERY from 'utils/member/initialMemberQuery';
import {
  makeConfirmPasswordField,
  makeDisplayNameField,
  makeEmailField,
  makePasswordField,
} from 'components/foundation/Form/fieldGenerators';
import LOG_IN_MUTATION from '../LogIn/logInMutation';
import { logInFormStateInterface } from '../LogIn/useLogIn';
import SIGN_UP_MUTATION from './signUpMutation';
import { createMemberVariables, signUpFormInterface } from './types';
import signUpErrorTranslator from './signUpErrorTranslator';

const initialState: signUpFormInterface = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const useSignUp = (
  closeModal: (() => void) | undefined
): [(children: ReactNode) => JSX.Element, JSX.Element[]] => {
  const router = useRouter();

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

  const [createMember] = useMutation<
    createMemberVariables,
    createMemberVariables
  >(SIGN_UP_MUTATION, {
    onCompleted: () => {
      if (closeModal) {
        closeModal();
      }
      router.push({ pathname: '/verification' });
      logIn({
        variables: {
          // eslint-disable-next-line no-use-before-define
          email: formState.email,
          // eslint-disable-next-line no-use-before-define
          password: formState.password,
        },
      });
    },
  });

  const [formState, handleFormUpdate, formCreator] =
    useForm<signUpFormInterface>(
      initialState,
      createMember,
      signUpErrorTranslator,
      'Sign Up'
    );

  const { displayName, email, password, confirmPassword } = formState;

  const formFields = [
    makeDisplayNameField(displayName, handleFormUpdate),
    makeEmailField(email, handleFormUpdate),
    makePasswordField(password, handleFormUpdate),
    makeConfirmPasswordField(confirmPassword, handleFormUpdate, password),
  ];

  return [formCreator, formFields];
};

export default useSignUp;
