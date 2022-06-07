import { useEffect } from 'react';
import { useRouter } from 'next/router';
import StyledSignUpPage from '@styles/pageStyles/StyledSignUpPage';
import runServerSideQueries from 'utils/runServerSideQueries';
import LogIn from 'components/member/LogIn/LogIn';
import useMemberData from 'utils/member/useMemberData';

// interface SignUpPageProps {}
const SignUpPage = (): JSX.Element => {
  const { id } = useMemberData('id');
  const router = useRouter();

  useEffect(() => {
    if (id) {
      router.push({ pathname: '/' });
    }
  });

  if (id) {
    return (
      <StyledSignUpPage>
        You&apos;re already logged in, silly! Let&apos;s get you home.
      </StyledSignUpPage>
    );
  }

  return (
    <StyledSignUpPage>
      <LogIn />
    </StyledSignUpPage>
  );
};

export async function getServerSideProps(context: any) {
  return runServerSideQueries(context);
}

export default SignUpPage;
