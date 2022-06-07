import styled from 'styled-components';
import { ApolloError, gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FunctionalIcon from '@icons/FunctionalIcon';
import X from '@icons/X';
import Button from '@styles/extendableElements/Button';
import INITIAL_MEMBER_QUERY from 'utils/member/initialMemberQuery';
import ErrorAlert from '../Error/ErrorAlert';

const StyledLogOutButton = styled(Button)`
  border: none;
  padding: 0;
  &:hover {
    background: none;
  }
`;

const LOG_OUT_MUTATION = gql`
  mutation LOG_OUT_MUTATION {
    endSession
  }
`;

interface LogOutButtonProps {
  collapsed: boolean;
}

const LogOutButton = ({ collapsed }: LogOutButtonProps): JSX.Element => {
  const router = useRouter();
  const [error, setError] = useState<ApolloError | null>(null);
  const [logOut] = useMutation(LOG_OUT_MUTATION, {
    refetchQueries: [
      {
        query: INITIAL_MEMBER_QUERY,
      },
    ],
    onError: (e) => setError(e),
    onCompleted: () => router.push({ pathname: '/' }),
  });

  if (error) {
    return <ErrorAlert error={error} />;
  }

  return (
    <StyledLogOutButton
      onClick={() => logOut()}
      key="logOutButton"
    >
      <div
        className="navLine"
        key="Log Out"
      >
        <span
          className="navIcon"
          key="log out icon"
        >
          <FunctionalIcon
            iconName="logOut"
            titleTextReplacement="Log Out"
          >
            <X color="coolGrey" />
          </FunctionalIcon>
        </span>
        {!collapsed && (
          <span
            className="navLabel"
            key="log out label"
          >
            Log Out
          </span>
        )}
      </div>
    </StyledLogOutButton>
  );
};

export default LogOutButton;
