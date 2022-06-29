import { ReactElement } from 'react';
import CollectionIcon from '@icons/Collection';
import DefaultAvatar from '@icons/DefaultAvatar';
import FriendsIcon from '@icons/Friends';
import HomeIcon from '@icons/Home';
import LinkIcon from '@icons/Link';
import Search from '@icons/Search';
import TwitterIcon from '@icons/Twitter';
import X from '@icons/X';
import YouIcon from '@icons/You';

interface linkInterface {
  icon: ReactElement<any, any>;
  text: string;
  iconName?: string;
  href: string;
}

const loggedOutNavLinks: linkInterface[] = [
  {
    icon: <HomeIcon />,
    text: 'Home',
    href: '/',
  },
  {
    icon: <Search />,
    text: 'Search',
    href: '/search',
  },
];
export { loggedOutNavLinks };

const navLinks: linkInterface[] = [
  ...loggedOutNavLinks,
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
];
export { navLinks };
