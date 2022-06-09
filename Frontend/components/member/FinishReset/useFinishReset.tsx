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
import { expiredToken, redeemedToken, resetFailed } from './constants';
import getResetCode from './getResetCode';
import useLogInForCallback from './useLogInForCallback';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
};

const useFinishReset: useFinishResetInterface = () => {
  // We need a router to route to the home page after the reset is completed
  const router = useRouter();

  // We need to get the verification token out of the url and make sure it's a string
  const code = getResetCode(router);

  // We need an error state to hold any errors from the log in callback
  const [resetError, setResetError] = useState<{ message: string } | null>(
    null
  );

  // We need to pass the logIn mutation to the useForm hook, but the logIn mutation needs the email and password variables which will be defined by the useForm hook. This isn't actually a problem, because the logIn mutation won't be called until after the useForm hook has run, but it upsets eslint and typescript. So we initialize these values before the logIn mutation and then populate them with the result of the useForm hook.
  let email = '';
  let password = '';

  // After they reset their password, we want to log them in with the new credentials. We'll get the logIn mutation that does that here
  const logIn = useLogInForCallback(setResetError);

  // The reset password mutation. Logs the user in and sends them to the homepage when successful; shows an error when not
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
        } else if (d.redeemMemberPasswordResetToken.code === 'TOKEN_REDEEMED') {
          setResetError({
            message: redeemedToken,
          });
        }
      },
    }
  );

  // Get our form pieces
  const [formState, handleFormUpdate, formCreator] =
    useForm<finishResetInterface>(
      initialState,
      resetPassword,
      undefined,
      'Reset Password'
    );

  // Make our form fields
  ({ email, password } = formState);
  const { confirmPassword } = formState;
  const formFields = [
    makeEmailField(email, handleFormUpdate),
    makePasswordField(password, handleFormUpdate),
    makeConfirmPasswordField(confirmPassword, handleFormUpdate, password),
  ];

  // Send back our form pieces and error message state
  return [formCreator, formFields, resetError];
};

export default useFinishReset;
