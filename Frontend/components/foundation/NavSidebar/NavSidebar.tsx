import Link from 'next/link';
import { FC, ReactElement, useState } from 'react';
import ArrowIcon from '../../icons/Arrow';
import CollectionIcon from '../../icons/Collection';
import DefaultAvatar from '../../icons/DefaultAvatar';
import FriendsIcon from '../../icons/Friends';
import FunctionalIcon from '../../icons/FunctionalIcon';
import HomeIcon from '../../icons/Home';
import LinkIcon from '../../icons/Link';
import Search from '../../icons/Search';
import TwitterIcon from '../../icons/Twitter';
import X from '../../icons/X';
import YouIcon from '../../icons/You';
import StyledNavSidebar from './StyledNavSidebar';

interface NavSidebarProps {}

interface linkObj {
  icon: ReactElement<any, any>;
  text: string;
  iconName?: string;
  href: string;
}

const navLinks: linkObj[] = [
  {
    icon: <HomeIcon />,
    text: 'Home',
    href: '/',
  },
  {
    icon: <YouIcon />,
    text: 'My Things',
    iconName: 'you',
    href: '/me?stuff=friends',
  },
  {
    icon: <FriendsIcon />,
    text: 'Friends',
    href: '/me?stuff=friends',
  },
  {
    icon: <Search />,
    text: 'Search',
    href: '/search',
  },
  {
    icon: <TwitterIcon color="coolGrey" />,
    text: 'Twitter',
    href: '/twitter',
  },
  {
    icon: <X color="coolGrey" />,
    text: 'New Thing',
    iconName: 'new',
    href: '/new',
  },
  {
    icon: <CollectionIcon />,
    text: 'Collections',
    href: '/collections',
  },
  {
    icon: <LinkIcon />,
    text: 'Links',
    href: '/links',
  },
  {
    icon: <DefaultAvatar />,
    text: 'Profile',
    iconName: 'avatar',
    href: '/me',
  },
  {
    icon: <X color="coolGrey" />,
    text: 'Log Out',
    iconName: 'logOut',
    href: '/new',
  },
];

const NavSidebar: FC<NavSidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navElements = navLinks.map((linkObj) => (
    <Link href={linkObj.href}>
      <a href={linkObj.href}>
        <div className="navLine">
          <span className="navIcon">
            <FunctionalIcon
              iconName={
                linkObj.iconName != null ? linkObj.iconName : linkObj.text
              }
              titleTextReplacement={linkObj.text}
            >
              {linkObj.icon}
            </FunctionalIcon>
          </span>
          {!collapsed && <span className="navLabel">{linkObj.text}</span>}
        </div>
      </a>
    </Link>
  ));
  return (
    <StyledNavSidebar className={collapsed ? 'collapsed' : 'expanded'}>
      <div className="contents">{navElements}</div>
      <FunctionalIcon
        iconName="collapse"
        extraClass={collapsed ? 'pointingRight' : 'pointingLeft'}
        onClick={() => setCollapsed(!collapsed)}
      >
        <ArrowIcon />
      </FunctionalIcon>
    </StyledNavSidebar>
  );
};

export default NavSidebar;
