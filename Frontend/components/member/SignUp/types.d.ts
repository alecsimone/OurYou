import {
  ApolloCache,
  FetchResult,
  MutationFunctionOptions,
  DefaultContext,
} from '@apollo/client';
import { ReactNode } from 'react';

interface signUpFormInterface {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export type { signUpFormInterface };

interface createMemberVariables {
  displayName: string;
  email: string;
  password: string;
}
export type { createMemberVariables };

interface useSignUpInterface {
  (closeModal: (() => void) | undefined): [
    (children: ReactNode) => JSX.Element,
    JSX.Element[],
    { message: string } | null
  ];
}
export type { useSignUpInterface };

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
