import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FinishReset from 'components/member/FinishReset';
import StyledFinishReset from 'components/member/FinishReset/StyledFinishReset';
import useMemberData from '../utils/member/useMemberData';
import runServerSideQueries from '../utils/runServerSideQueries';
// interface ResetPageProps {}

const ResetPage = (): JSX.Element => {
  const { id } = useMemberData('id');
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (id) {
      router.push({ pathname: '/' });
    }
  });

  if (id) {
    return (
      <StyledFinishReset>
        You&apos;re already logged in, you shouldn&apos;t be resetting any
        passwords. Let&apos;s get you home.
      </StyledFinishReset>
    );
  }

  if (!isReady) {
    return (
      <StyledFinishReset>Preparing to reset password...</StyledFinishReset>
    );
  }

  if (router.query.code == null) {
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

export async function getServerSideProps(context: any) {
  return runServerSideQueries(context);
}
