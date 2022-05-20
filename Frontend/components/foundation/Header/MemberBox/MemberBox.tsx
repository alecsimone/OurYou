import Link from 'next/link';
import Avatar from 'components/memberUtilities/Avatar';
import NotificationBox from './NotificationBox';
import StyledMemberBox from './StyledMemberBox';

interface MemberBoxProps {
  toggleThingsSidebar: () => void;
}

const MemberBox = ({ toggleThingsSidebar }: MemberBoxProps): JSX.Element => {
  // const { data, loading } = useMemberBoxQuery();
  const data = {
    displayName: 'Alec',
    rep: 1,
    avatar: null,
  };

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
    return <StyledMemberBox>MemberBox</StyledMemberBox>;
  }

  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  return <StyledMemberBox>Error</StyledMemberBox>;
};

export default MemberBox;
