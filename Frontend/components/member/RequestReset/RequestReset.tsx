// interface RequestResetProps {}

import useRequestReset from './useRequestReset';

const RequestReset = (): JSX.Element => {
  const [form, resetRequested] = useRequestReset();

  if (resetRequested) {
    return (
      <div>
        Password reset requested. Please check your email for the reset link.
      </div>
    );
  }

  return form;
};

export default RequestReset;
