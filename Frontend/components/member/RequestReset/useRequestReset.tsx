import { ReactNode, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import useForm from 'components/foundation/Form/useForm';
import { makeEmailField } from 'components/foundation/Form/fieldGenerators';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendMemberPasswordResetLink(email: $email)
  }
`;

const useRequestReset = (): [
  (children: ReactNode) => JSX.Element,
  JSX.Element[],
  boolean
] => {
  const [resetRequested, setResetRequested] = useState(false);
  const [requestPasswordReset] = useMutation(REQUEST_RESET_MUTATION, {
    onCompleted: () => {
      setResetRequested(true);
    },
  });

  const [formState, handleFormUpdate, formCreator] = useForm(
    { email: '' },
    requestPasswordReset,
    undefined,
    'Request Reset'
  );

  const formFields = [makeEmailField(formState.email, handleFormUpdate)];

  return [formCreator, formFields, resetRequested];
};

export default useRequestReset;
