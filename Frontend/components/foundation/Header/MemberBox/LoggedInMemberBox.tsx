import Link from 'next/link';
import Avatar from 'components/member/Avatar';
import NotificationBox from './NotificationBox';
import StyledMemberBox from './StyledMemberBox';
import { memberDataInterface } from './useMemberBoxQuery';

interface LoggedInMemberBoxProps {
  memberData: memberDataInterface;
  toggleThingsSidebar: () => void;
}

const LoggedInMemberBox = ({
  memberData,
  toggleThingsSidebar,
}: LoggedInMemberBoxProps): JSX.Element => {
  const { displayName, rep, avatar } = memberData;

  return (
    <StyledMemberBox>
      <NotificationBox />
      <Link
        href="/me"
        passHref
      >
        <a
          href="replace"
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
};

export default LoggedInMemberBox;
