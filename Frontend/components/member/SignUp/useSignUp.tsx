import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useForm from 'components/foundation/Form/useForm';
import {
  makeConfirmPasswordField,
  makeDisplayNameField,
  makeEmailField,
  makePasswordField,
} from 'components/foundation/Form/fieldGenerators';
import useLogInForCallback from '../FinishReset/useLogInForCallback';
import SIGN_UP_MUTATION from './signUpMutation';
import {
  createMemberVariables,
  signUpFormInterface,
  useSignUpInterface,
} from './types';
import signUpErrorTranslator from './signUpErrorTranslator';

const initialState: signUpFormInterface = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const useSignUp: useSignUpInterface = (closeModal) => {
  const [signUpError, setSignUpError] = useState<{ message: string } | null>(
    null
  );
  const router = useRouter();

  const logIn = useLogInForCallback(setSignUpError, false);

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

  return [formCreator, formFields, signUpError];
};

export default useSignUp;
