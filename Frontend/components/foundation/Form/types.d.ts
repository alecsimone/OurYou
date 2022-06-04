import { ApolloError } from '@apollo/client';
import { ChangeEventHandler, ReactNode } from 'react';

interface callBackMutationInterface<formInterface> {
  (options: {
    variables: formInterface;
    onError: (err: ApolloError) => void;
  }): void;
}

interface errorTranslatorInterface {
  (e: ApolloError): ApolloError | { message: string };
}

interface useFormInterface {
  <formInterface>(
    initialState: formInterface,
    callbackMutation: callBackMutationInterface<formInterface>,
    errorTranslator?: errorTranslatorInterface,
    submitButtonText?: string
  ): [
    formInterface,
    ChangeEventHandler<HTMLInputElement>,
    (children: ReactNode) => JSX.Element
  ];
}

export default useFormInterface;
