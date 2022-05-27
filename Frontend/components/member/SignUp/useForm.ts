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
import { createMemberMutateType } from './useSignUp';

type useFormReturnTuple = [
  RefObject<HTMLFormElement>,
  signUpFormStateInterface,
  ChangeEventHandler<HTMLInputElement>,
  boolean,
  FormEventHandler<HTMLFormElement>,
  ApolloError | { message: string } | null
];

const useForm = (
  initialState: {
    [key: string]: string | number;
  },
  onSubmitCallback: createMemberMutateType,
  errorTranslator: (e: ApolloError) => ApolloError | { message: string }
): useFormReturnTuple => {
  // First let's handle the basic form state.
  const [formState, setFormState] = useState(initialState);
  const handleFormUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [allInputsValid, setAllInputsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (formRef.current == null) return;
    const inputs = formRef.current.querySelectorAll('input');
    let inputValidityCheck = true;
    for (const input of inputs) {
      if (!input.checkValidity()) {
        inputValidityCheck = false;
      }
    }
    setAllInputsValid(inputValidityCheck);
  }, [formState]);

  const [error, setError] = useState<ApolloError | { message: string } | null>(
    null
  );

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmitCallback({
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
