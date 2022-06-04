import {
  ApolloCache,
  FetchResult,
  MutationFunctionOptions,
  DefaultContext,
} from '@apollo/client';

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
