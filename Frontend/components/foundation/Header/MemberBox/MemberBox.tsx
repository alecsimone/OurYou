import Link from 'next/link';
import Avatar from '../../../memberUtilities/Avatar/Avatar';
import { toggleThingsSidebarFn } from '../../Layout/layoutUtils/useSidebars';
import NotificationBox from './NotificationBox/NotificationBox';
import StyledMemberBox from './StyledMemberBox';

interface MemberBoxProps {
  toggleThingsSidebar: toggleThingsSidebarFn;
}

const MemberBox = ({ toggleThingsSidebar }: MemberBoxProps): JSX.Element => {
  const data = {
    avatar:
      'https://pbs.twimg.com/profile_images/917202644740956160/lMFbGZ-e_400x400.jpg',
    displayName: 'Alec',
    rep: 1,
  };

  const { rep, displayName, avatar } = data;

  if (data) {
    return (
      <StyledMemberBox>
        <NotificationBox />
        <Link href="/me">
          <a href="/me" className="profileLink">
            {`[${rep}]`} {displayName}
          </a>
        </Link>
        <Avatar avatar={avatar} onClick={toggleThingsSidebar} />
      </StyledMemberBox>
    );
  }
  return <div>MemberBox</div>;
};

export default MemberBox;
