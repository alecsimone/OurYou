// interface RequestResetProps {}

import useRequestReset from './useRequestReset';

const RequestReset = (): JSX.Element => {
  const [formCreator, formFields, resetRequested] = useRequestReset();

  if (resetRequested) {
    return (
      <div>
        Password reset requested. Please check your email for the reset link.
      </div>
    );
  }

  return formCreator(formFields);
};

export default RequestReset;
