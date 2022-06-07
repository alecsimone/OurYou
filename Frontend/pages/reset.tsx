import { useRouter } from 'next/router';
import FinishReset from 'components/member/FinishReset';
import StyledFinishReset from 'components/member/FinishReset/StyledFinishReset';
// interface ResetPageProps {}

const ResetPage = (): JSX.Element => {
  const router = useRouter();
  if (router?.query?.code == null) {
    return (
      <StyledFinishReset>
        Something has gone wrong with your reset token. Please click the link in
        your email again.
      </StyledFinishReset>
    );
  }
  return <FinishReset />;
};

export default ResetPage;
