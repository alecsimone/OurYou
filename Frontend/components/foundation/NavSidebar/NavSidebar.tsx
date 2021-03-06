import Link from 'next/link';
import { useState } from 'react';
import ArrowIcon from '@icons/Arrow';
import FunctionalIcon from '@icons/FunctionalIcon';
import useMemberData from 'utils/member/useMemberData';
import StyledNavSidebar from './StyledNavSidebar';
import { loggedOutNavLinks, navLinks } from './NavLinks';
import LogOutButton from './LogOutButton';

interface NavSidebarProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const NavSidebar = ({ isOpen, toggleOpen }: NavSidebarProps): JSX.Element => {
  const { id } = useMemberData('id');
  let isLoggedIn = false;
  if (id != null) {
    isLoggedIn = true;
  }
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

  const linksToUse = isLoggedIn ? navLinks : loggedOutNavLinks;

  const navElements = linksToUse.map((linkObj) => (
    <Link
      href={linkObj.href}
      key={linkObj.text}
    >
      <a
        href={linkObj.href}
        onClick={toggleOpen}
      >
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

  if (isLoggedIn) {
    navElements.push(
      <LogOutButton
        collapsed={collapsed}
        key="logOutButton"
      />
    );
  }
  return (
    <StyledNavSidebar
      className={className}
      data-testid="navSidebar"
    >
      <div className="contents">{navElements}</div>
      <FunctionalIcon
        iconName="collapse"
        extraClass={collapsed ? 'pointingRight' : 'pointingLeft'}
        onTrigger={() => setCollapsed(!collapsed)}
      >
        <ArrowIcon />
      </FunctionalIcon>
    </StyledNavSidebar>
  );
};

export default NavSidebar;
