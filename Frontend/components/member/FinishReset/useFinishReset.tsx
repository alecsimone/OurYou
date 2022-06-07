import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useForm from 'components/foundation/Form/useForm';
import {
  makeConfirmPasswordField,
  makeEmailField,
  makePasswordField,
} from 'components/foundation/Form/fieldGenerators';
import {
  finishResetInterface,
  finishResetResult,
  finishResetVariables,
  useFinishResetInterface,
} from './types';
import RESET_PASSWORD_MUTATION from './resetPasswordMutation';
import { expiredToken, resetFailed } from './constants';
import getResetCode from './getResetCode';
import useLogInForCallback from './useLogInForCallback';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

const useFinishReset: useFinishResetInterface = () => {
  const router = useRouter();
  const code = getResetCode(router);

  const [resetError, setResetError] = useState<{ message: string } | null>(
    null
  );

  // We need to pass the logIn mutation to the useForm hook, but the logIn mutation needs the email and password variables which will be defined by the useForm hook. This isn't actually a problem, because the logIn mutation won't be called until after the useForm hook has run, but it upsets eslint and typescript. So we initialize these values before the logIn mutation and then populate them with the result of the useForm hook.
  let email = '';
  let password = '';

  const logIn = useLogInForCallback(setResetError);

  const [resetPassword] = useMutation<finishResetResult, finishResetVariables>(
    RESET_PASSWORD_MUTATION,
    {
      variables: {
        code,
      },
      onCompleted: (d) => {
        if (d.redeemMemberPasswordResetToken == null) {
          // If the reset is successful, the redeemMemberPasswordResetToken object will be null. In that case, we want to log in with the email and password the user just provided. This has to be done in the onCompleted callback so that the password will have already been changed.
          logIn({
            variables: {
              email,
              password,
            },
          });
        } else if (d.redeemMemberPasswordResetToken.code === 'FAILURE') {
          // If the reset was not successful, we get an error code, which we'll translate for the user
          setResetError({
            message: resetFailed,
          });
        } else if (d.redeemMemberPasswordResetToken.code === 'TOKEN_EXPIRED') {
          setResetError({
            message: expiredToken,
          });
        }
      },
    }
  );

  const [formState, handleFormUpdate, formCreator] =
    useForm<finishResetInterface>(
      initialState,
      resetPassword,
      undefined,
      'Reset Password'
    );

  ({ email, password } = formState);
  const { confirmPassword } = formState;

  const formFields = [
    makeEmailField(email, handleFormUpdate),
    makePasswordField(password, handleFormUpdate),
    makeConfirmPasswordField(confirmPassword, handleFormUpdate, password),
  ];

  return [formCreator, formFields, resetError];
};

export default useFinishReset;
