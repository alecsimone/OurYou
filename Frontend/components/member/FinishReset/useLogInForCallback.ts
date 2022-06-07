import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { SetStateAction } from 'react';
import INITIAL_MEMBER_QUERY from 'utils/member/initialMemberQuery';
import LOG_IN_MUTATION from '../LogIn/logInMutation';
import { logInFormStateInterface, logInResult } from '../LogIn/useLogIn';
import { didLoginWork } from './constants';

const useLogInForCallback = (
  setResetError: (
    value: SetStateAction<{
      message: string;
    } | null>
  ) => void
) => {
  const router = useRouter();

  const [logIn] = useMutation<logInResult, logInFormStateInterface>(
    LOG_IN_MUTATION,
    {
      onCompleted: (logInData) => {
        if (didLoginWork(logInData)) {
          router.push({ pathname: '/' });
        } else {
          setResetError({
            message: 'Log In failed',
          });
        }
      },
      refetchQueries: [
        {
          query: INITIAL_MEMBER_QUERY,
        },
      ],
    }
  );
  return logIn;
};
export default useLogInForCallback;
