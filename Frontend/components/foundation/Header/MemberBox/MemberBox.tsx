import Link from 'next/link';
import Avatar from 'components/memberUtilities/Avatar';
import NotificationBox from './NotificationBox';
import StyledMemberBox from './StyledMemberBox';
import useMemberBoxQuery from './useMemberBoxQuery';

interface MemberBoxProps {
  toggleThingsSidebar: () => void;
}

const MemberBox = ({ toggleThingsSidebar }: MemberBoxProps): JSX.Element => {
  const { data, loading } = useMemberBoxQuery();

  if (data?.authenticatedItem) {
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

  if (loading) {
    return <StyledMemberBox>Authenticating...</StyledMemberBox>;
  }

  return <StyledMemberBox>Error</StyledMemberBox>;
};

export default MemberBox;
