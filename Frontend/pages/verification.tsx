import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import StyledVerificationPage from '@styles/pageStyles/StyledVerifyPage';
import runServerSideQueries from 'utils/runServerSideQueries';
import ErrorAlert from 'components/foundation/Error/ErrorAlert';
import useMemberData from 'utils/useMemberData';

const FINISH_SIGNUP_QUERY = gql`
  query FINISH_SIGNUP_QUERY($id: ID!, $code: String!) {
    verifyMember(id: $id, code: $code) {
      id
    }
  }
`;

// interface VerificationPageProps {}

const VerificationPage = (): JSX.Element => {
  const { role } = useMemberData('role');
  const router = useRouter();
  const { query } = router;
  let id;
  let code;
  if (query != null) {
    id = query.id;
    code = query.code;
  }

  const { data, loading, error } = useQuery(FINISH_SIGNUP_QUERY, {
    variables: { id, code },
    skip:
      query == null ||
      id == null ||
      code == null ||
      ['Member', 'Moderator', 'Editor', 'Admin'].includes(role),
  });

  useEffect(() => {
    if (role != null && role !== 'Unverified') {
      router.push({ pathname: '/' });
    }
  }, [role, router]);

  if (role != null && role !== 'Unverified') {
    return (
      <StyledVerificationPage>
        You don&apos;t need to be here. Let&apos;s get you back home, little
        buddy.
      </StyledVerificationPage>
    );
  }

  if (code == null && id == null) {
    return (
      <StyledVerificationPage>
        You have successfully registered! Please check the email address you
        provided for a verification email. Click the link in that email and
        you&apos;ll be able to use the site!
      </StyledVerificationPage>
    );
  }

  if (error) {
    return <ErrorAlert error={error} />;
  }

  if (data && data.verifyMember && data.verifyMember.id != null) {
    return (
      <StyledVerificationPage>
        Your email address has been verified! Welcome to Ouryou, you may now
        start using the site!
      </StyledVerificationPage>
    );
  }

  if (loading) {
    return <StyledVerificationPage>Verifying...</StyledVerificationPage>;
  }

  return <StyledVerificationPage>Verification Page</StyledVerificationPage>;
};

export async function getServerSideProps(context: any) {
  const { query } = context;
  if (query && query.id && query.code) {
    return runServerSideQueries(context, [
      {
        query: FINISH_SIGNUP_QUERY,
        variables: {
          id: query.id,
          code: query.code,
        },
      },
    ]);
  }
  return runServerSideQueries(context);
}

export default VerificationPage;
