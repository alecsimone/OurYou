import StyledSignUpPage from '@styles/pageStyles/StyledSignUpPage';
import SignUp from 'components/member/SignUp';
import runServerSideQueries from 'utils/runServerSideQueries';
import useSendLoggedInMembersHome from 'utils/member/useSendLoggedInMembersHome';

// interface SignUpPageProps {}
const SignUpPage = (): JSX.Element => {
  const isLoggedIn = useSendLoggedInMembersHome();

  if (isLoggedIn) {
    return (
      <StyledSignUpPage>
        You&apos;re already signed up, silly! Let&apos;s get you home.
      </StyledSignUpPage>
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
