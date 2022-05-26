import StyledVerifyPage from '@styles/pageStyles/StyledVerifyPage';

interface VerifyPageProps {
  memberID?: string;
  token?: string;
}

const VerifyPage = ({ memberID, token }: VerifyPageProps): JSX.Element => {
  if (token == null && memberID == null) {
    return (
      <StyledVerifyPage>
        You have successfully registered! Please check the email address you
        provided for a verification email. Click the link in that email and
        you&apos;ll be able to use the site!
      </StyledVerifyPage>
    );
  }
  return <StyledVerifyPage>VerifyPage</StyledVerifyPage>;
};

export default VerifyPage;
