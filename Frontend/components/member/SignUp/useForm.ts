import { ApolloError } from '@apollo/client';
import {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  RefObject,
} from 'react';

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
    errorTranslator: errorTranslatorInterface
  ): [
    RefObject<HTMLFormElement>,
    formInterface,
    ChangeEventHandler<HTMLInputElement>,
    boolean,
    FormEventHandler<HTMLFormElement>,
    ApolloError | { message: string } | null
  ];
}

const useForm: useFormInterface = (
  initialState,
  callbackMutation,
  errorTranslator
) => {
  // First let's handle the basic form state and our updater.
  const [formState, setFormState] = useState(initialState);
  const handleFormUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Then we'll handle checking the validity. This state will be passed to the submit button and will disable it if all the inputs aren't valid
  const [allInputsValid, setAllInputsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (formRef.current == null) return;

    // We start by getting all the inputs in the form
    const inputs = formRef.current.querySelectorAll('input');

    // Then we check each to make sure it's valid
    let inputValidityCheck = true;
    for (const input of inputs) {
      if (!input.checkValidity()) {
        inputValidityCheck = false;
      }
    }

    // And set our validity state accordingly
    setAllInputsValid(inputValidityCheck);
  }, [formState]);

  // Next we have an error state, which will be passed to the form to let the user know if there's an error submitting it
  const [error, setError] = useState<ApolloError | { message: string } | null>(
    null
  );

  // Finally our submit function.
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    callbackMutation({
      variables: formState,
      onError: (err) => {
        if (errorTranslator) {
          setError(errorTranslator(err));
        } else {
          setError(err);
        }
      },
    });
  };

  return [
    formRef,
    formState,
    handleFormUpdate,
    allInputsValid,
    submitForm,
    error,
  ];
};

export default useForm;
