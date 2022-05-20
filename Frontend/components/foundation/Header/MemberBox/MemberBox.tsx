import Link from 'next/link';
import Avatar from 'components/memberUtilities/Avatar';
import NotificationBox from './NotificationBox';
import StyledMemberBox from './StyledMemberBox';
import useMemberBoxQuery from './useMemberBoxQuery';

interface MemberBoxProps {
  toggleThingsSidebar: () => void;
}

const MemberBox = ({ toggleThingsSidebar }: MemberBoxProps): JSX.Element => {
  const { data, loading, error } = useMemberBoxQuery();

  if (data) {
    const { displayName, rep, avatar } = data;
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
    return <div>MemberBox</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Error</div>;
};

export default MemberBox;
