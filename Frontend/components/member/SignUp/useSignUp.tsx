import { useMutation } from '@apollo/client';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import useForm from 'components/foundation/Form/useForm';
import FormField from 'components/foundation/Form/FormField';
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

  const [createMember] = useMutation<
    createMemberVariables,
    createMemberVariables
  >(SIGN_UP_MUTATION, {
    onCompleted: () => {
      // setFormState(initialState);
      if (closeModal) {
        closeModal();
      }
      router.push({ pathname: '/verify' });
    },
  });

  const [formState, handleFormUpdate, formCreator] = useForm(
    initialState,
    createMember,
    signUpErrorTranslator,
    'Sign Up'
  );

  const { displayName, email, password, confirmPassword } = formState;

  const displayNameField = (
    <FormField
      key="displayName"
      fieldType="input"
      requirements="Display Name must be at least 3 characters long"
      fieldProps={{
        type: 'text',
        required: true,
        name: 'displayName',
        placeholder: 'Display Name',
        minLength: 3,
        maxLength: 24,
        value: displayName,
        onChange: handleFormUpdate,
      }}
    />
  );

  const emailField = (
    <FormField
      key="email"
      fieldType="input"
      requirements="Must be a valid email address"
      fieldProps={{
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        value: email,
        onChange: handleFormUpdate,
        required: true,
      }}
    />
  );

  const passwordField = (
    <FormField
      key="password"
      fieldType="input"
      requirements="Password must be at least 8 characters long"
      fieldProps={{
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        value: password,
        onChange: handleFormUpdate,
        required: true,
        minLength: 8,
      }}
    />
  );

  const confirmPasswordField = (
    <FormField
      key="confirmPassword"
      fieldType="input"
      requirements="Passwords must match"
      fieldProps={{
        type: 'password',
        name: 'confirmPassword',
        placeholder: 'Confirm Password',
        value: confirmPassword,
        onChange: handleFormUpdate,
        required: true,
        pattern: password,
      }}
    />
  );

  const formFields = [
    displayNameField,
    emailField,
    passwordField,
    confirmPasswordField,
  ];

  return [formCreator, formFields];
};

export default useSignUp;
