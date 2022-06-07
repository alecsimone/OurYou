import Error from 'components/foundation/Error';
import StyledFinishReset from './StyledFinishReset';
import useFinishReset from './useFinishReset';

// interface FinishResetProps {}

const FinishReset = (): JSX.Element => {
  const [formCreator, formFields, resetError] = useFinishReset();
  return (
    <StyledFinishReset>
      <h3>Reset Password</h3>
      {resetError && <Error error={resetError} />}
      {formCreator(formFields)}
    </StyledFinishReset>
  );
};

export default FinishReset;
