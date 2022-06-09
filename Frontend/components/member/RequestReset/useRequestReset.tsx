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
  // Confirmation state to let the user know their reset has been initiated
  const [resetRequested, setResetRequested] = useState(false);

  // The request reset mutation
  const [requestPasswordReset] = useMutation(REQUEST_RESET_MUTATION, {
    onCompleted: () => {
      setResetRequested(true);
    },
  });

  // Get our form pieces
  const [formState, handleFormUpdate, formCreator] = useForm(
    { email: '' },
    requestPasswordReset,
    undefined,
    'Request Reset'
  );

  // And our form fields
  const formFields = [makeEmailField(formState.email, handleFormUpdate)];

  // Send back the form pieces and the confirmation state
  return [formCreator, formFields, resetRequested];
};

export default useRequestReset;
