import { useEffect } from 'react';
import StyledSignUpPage from '@styles/pageStyles/StyledSignUpPage';
import runServerSideQueries from 'utils/runServerSideQueries';
import LogIn from 'components/member/LogIn/LogIn';
import useMemberData from 'utils/member/useMemberData';

// interface SignUpPageProps {}
const SignUpPage = (): JSX.Element => {
  const { id } = useMemberData('id');

  useEffect(() => {
    if (id) {
      window.location.replace('/');
    }
  });

  if (id) {
    return (
      <div>You&apos;re already logged in, silly! Let&apos;s get you home.</div>
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
