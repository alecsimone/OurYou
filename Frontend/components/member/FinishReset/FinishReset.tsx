import Error from 'components/foundation/Error';
import StyledFinishReset from './StyledFinishReset';
import useFinishReset from './useFinishReset';

// interface FinishResetProps {}

const FinishReset = (): JSX.Element => {
  const [form, resetSuccess, resetError] = useFinishReset();

  if (resetSuccess) {
    return <StyledFinishReset>Success!</StyledFinishReset>;
  }

  return (
    <StyledFinishReset>
      <h3>Reset Password</h3>
      {resetError && <Error error={resetError} />}
      {form}
    </StyledFinishReset>
  );
};

export default FinishReset;
