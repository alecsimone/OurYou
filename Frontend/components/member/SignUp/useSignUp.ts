import {
  ApolloCache,
  ApolloError,
  FetchResult,
  MutationFunctionOptions,
  DefaultContext,
  useMutation,
} from '@apollo/client';
import { useRouter } from 'next/router';
import SIGN_UP_MUTATION from './signUpMutation';

interface signUpFormInterface {
  [key: string]: string;
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: signUpFormInterface = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
export type { signUpFormInterface };

interface createMemberVariables {
  displayName: string;
  email: string;
  password: string;
}

type createMemberMutateType = (
  options?:
    | MutationFunctionOptions<
        createMemberVariables,
        createMemberVariables,
        DefaultContext,
        ApolloCache<any>
      >
    | undefined
) => Promise<FetchResult>;
export type { createMemberMutateType };

const errorTranslator = (e: ApolloError) => {
  if (e.message.includes('Unique constraint failed on the fields: (`email`)')) {
    return {
      message:
        "An account already exists for that email. If you've forgotten your password, please try resetting it.",
    };
  }
  if (e.message.includes('Display Name must be at least 3 characters long')) {
    return {
      message: 'Your display name must be at least 3 characters long',
    };
  }
  return e;
};

const useSignUp = (
  closeModal: (() => void) | undefined
): [
  signUpFormInterface,
  createMemberMutateType,
  (e: ApolloError) => ApolloError | { message: string }
] => {
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

  return [initialState, createMember, errorTranslator];
};

export default useSignUp;
