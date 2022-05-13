import Link from 'next/link';
import { ReactElement, useState } from 'react';
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

interface linkInterface {
  icon: ReactElement<any, any>;
  text: string;
  iconName?: string;
  href: string;
}

const navLinks: linkInterface[] = [
  {
    icon: <HomeIcon />,
    text: 'Home',
    href: '/',
  },
  {
    icon: <YouIcon />,
    text: 'My Things',
    iconName: 'you',
    href: '/me',
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
export { navLinks };

interface NavSidebarProps {
  isOpen: boolean;
}

const NavSidebar = ({ isOpen }: NavSidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);

  let className = 'navSidebar';
  if (collapsed) {
    className += ' collapsed';
  } else {
    className += ' expanded';
  }
  if (isOpen) {
    className += ' visible';
  } else {
    className += ' hidden';
  }

  const navElements = navLinks.map((linkObj) => (
    <Link
      href={linkObj.href}
      key={linkObj.text}
    >
      <a href={linkObj.href}>
        <div
          className="navLine"
          key={linkObj.text}
        >
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
    <StyledNavSidebar className={className}>
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
