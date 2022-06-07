import { useEffect } from 'react';
import { useRouter } from 'next/router';
import StyledSignUpPage from '@styles/pageStyles/StyledSignUpPage';
import SignUp from 'components/member/SignUp';
import runServerSideQueries from 'utils/runServerSideQueries';
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
