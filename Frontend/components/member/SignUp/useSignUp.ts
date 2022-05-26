import { ApolloError, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
} from 'react';
import SIGN_UP_MUTATION from './signUpMutation';

interface formStateInterface {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: formStateInterface = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const useSignUp = (
  closeModal: (() => void) | undefined
): [
  formStateInterface,
  ChangeEventHandler<HTMLInputElement>,
  FormEventHandler<HTMLFormElement>,
  ApolloError | { message: string } | null
] => {
  const [formState, setFormState] = useState(initialState);
  const [signUpError, setSignupError] = useState<
    ApolloError | { message: string } | null
  >(null);
  const { displayName, email, password, confirmPassword } = formState;

  const router = useRouter();

  const [createMember] = useMutation(SIGN_UP_MUTATION, {
    variables: {
      displayName,
      email,
      password,
    },
    onError: (e) => {
      if (
        e.message.includes('Unique constraint failed on the fields: (`email`)')
      ) {
        setSignupError({
          message:
            "An account already exists for that email. If you've forgotten your password, please try resetting it.",
        });
        return;
      }
      if (
        e.message.includes('Display Name must be at least 3 characters long')
      ) {
        setSignupError({
          message: 'Your display name must be at least 3 characters long',
        });
        return;
      }
      setSignupError(e);
    },
    onCompleted: () => {
      // setFormState(initialState);
      if (closeModal) {
        closeModal();
      }
      router.push({ pathname: '/verify' });
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
    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert('Passwords must match!'); // We're already doing some validation in the form itself, so if they ignored that then screw em, they get an alert.
    }

    createMember();
  };

  return [formState, handleFormUpdate, submitForm, signUpError];
};

export default useSignUp;
