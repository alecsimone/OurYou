import Link from 'next/link';
import { useState } from 'react';
import Avatar from 'components/memberUtilities/Avatar';
import Error from 'components/foundation/Error/Error';
import Button from '@styles/extendableElements/Button';
import Modal from 'components/foundation/Modal';
import NotificationBox from './NotificationBox';
import StyledMemberBox from './StyledMemberBox';
import useMemberBoxQuery from './useMemberBoxQuery';

interface MemberBoxProps {
  toggleThingsSidebar: () => void;
}

const MemberBox = ({ toggleThingsSidebar }: MemberBoxProps): JSX.Element => {
  const { data, loading, error } = useMemberBoxQuery();
  const [showingSignUp, setShowingSignUp] = useState(false);

  if (data) {
    if (data.authenticatedItem) {
      const { displayName, rep, avatar } = data.authenticatedItem;
      return (
        <StyledMemberBox>
          <NotificationBox />
          <Link href="/me">
            <a
              href="/me"
              className="profileLink"
            >
              {`[${rep}]`} {displayName}
            </a>
          </Link>
          <Avatar
            avatar={avatar}
            onTrigger={toggleThingsSidebar}
          />
        </StyledMemberBox>
      );
    }

    return (
      <StyledMemberBox>
        <Button
          className="signUp"
          onClick={() => setShowingSignUp(true)}
        >
          Sign up or Log in
        </Button>
        {showingSignUp && (
          <Modal close={() => setShowingSignUp(false)}>Sign up or Log in</Modal>
        )}
      </StyledMemberBox>
    );
  }

  if (loading) {
    return <StyledMemberBox>Authenticating...</StyledMemberBox>;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <StyledMemberBox>Unknown Error</StyledMemberBox>;
};

export default MemberBox;
