import { useEffect } from 'react';
import StyledSignUpPage from '@styles/pageStyles/StyledSignUpPage';
import SignUp from 'components/member/SignUp/SignUp';
import runServerSideQueries from 'utils/runServerSideQueries';
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
      <div>You&apos;re already signed up, silly! Let&apos;s get you home.</div>
    );
  }

  return (
    <StyledSignUpPage>
      <SignUp />
    </StyledSignUpPage>
  );
};

export async function getServerSideProps(context: any) {
  return runServerSideQueries(context);
}

export default SignUpPage;
