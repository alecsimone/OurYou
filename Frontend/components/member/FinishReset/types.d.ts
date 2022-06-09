import {
  ApolloCache,
  MutationFunctionOptions,
  DefaultContext,
  FetchResult,
} from '@apollo/client';
import { ReactNode } from 'react';
import { logInFormStateInterface, logInResult } from '../LogIn/types';

interface finishResetInterface {
  email: string;
  password: string;
  confirmPassword: string;
}
export type { finishResetInterface };

interface finishResetVariables {
  email?: string;
  code?: string;
  password?: string;
}
export type { finishResetVariables };

interface finishResetResult {
  redeemMemberPasswordResetToken: {
    __typename: 'RedeemMemberPasswordResetTokenResult';
    code: 'FAILURE' | 'TOKEN_EXPIRED' | 'TOKEN_REDEEMED';
    message: string;
  };
}
export type { finishResetResult };

interface useFinishResetInterface {
  (): [
    (children: ReactNode) => JSX.Element,
    JSX.Element[],
    boolean,
    { message: string } | null
  ];
}
export type { useFinishResetInterface };

interface logInInterface {
  (
    options?:
      | MutationFunctionOptions<
          logInResult,
          logInFormStateInterface,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ): Promise<
    FetchResult<logInResult, Record<string, any>, Record<string, any>>
  >;
}
export type { logInInterface };
