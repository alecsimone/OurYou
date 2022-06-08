import StyledSignUpPage from '@styles/pageStyles/StyledSignUpPage';
import runServerSideQueries from 'utils/runServerSideQueries';
import LogIn from 'components/member/LogIn/LogIn';
import useSendLoggedInMembersHome from 'utils/member/useSendLoggedInMembersHome';

// interface SignUpPageProps {}
const SignUpPage = (): JSX.Element => {
  const isLoggedIn = useSendLoggedInMembersHome();

  if (isLoggedIn) {
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
