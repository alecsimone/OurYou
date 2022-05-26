import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import StyledSignUpPage from '@styles/pageStyles/StyledSignUpPage';
import SignUp from 'components/member/SignUp/SignUp';
import INITIAL_MEMBER_QUERY from 'utils/initialMemberQuery';
import runServerSideQueries from 'utils/runServerSideQueries';

// interface SignUpPageProps {}
const SignUpPage = (): JSX.Element => {
  const { data } = useQuery(INITIAL_MEMBER_QUERY);

  useEffect(() => {
    if (data && data.authenticatedItem) {
      window.location.replace('/');
    }
  });

  if (data && data.authenticatedItem) {
    return (
      <div>You&apos;re already signed up silly! Let&apos;s get you home.</div>
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