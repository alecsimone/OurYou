import { Dispatch, SetStateAction } from 'react';
import {
  desktopBreakpointPx,
  mobileBreakpointPx,
} from '../../../../styles/breakpoints';
import Input from '../../../../styles/extendableElements/Input';
import FunctionalIcon from '../../../icons/FunctionalIcon';
import HamburgerIcon from '../../../icons/Hamburger';
import Search from '../../../icons/Search';
import X from '../../../icons/X';
import StyledNavButtons from './StyledNavButtons';

const toggleShowingSearch = (
  showingSearch: boolean,
  setShowingSearch: Dispatch<SetStateAction<boolean>>
) => {
  // We only want to toggle showingSearch if the screen is between the mobileBreakpoint and the desktopBreakpoint. If it's smaller, we never want to show the search bar, and if it's larger, we always want to show it.
  if (window.innerWidth < mobileBreakpointPx) {
    setShowingSearch(false);
  } else if (window.innerWidth > desktopBreakpointPx) {
    setShowingSearch(true);
  } else {
    setShowingSearch(!showingSearch);
  }
};

interface NavButtonsProps {
  showingSearch: boolean;
  setShowingSearch: Dispatch<SetStateAction<boolean>>;
  toggleNavSidebar: toggleNavSidebarFnn;
}

const NavButtons = ({
  showingSearch,
  setShowingSearch,
  toggleNavSidebar,
}: NavButtonsProps): JSX.Element => (
  <StyledNavButtons className="navButtons">
    <FunctionalIcon
      iconName="hamburger"
      titleTextReplacement="Show Nav Sidebar"
      onClick={(e) => toggleNavSidebar(e, 'hamburger')}
    >
      <HamburgerIcon />
    </FunctionalIcon>
    <FunctionalIcon iconName="newPost" titleTextReplacement="New Post">
      <X color="coolGrey" />
    </FunctionalIcon>
    <FunctionalIcon
      iconName="search"
      onClick={() => toggleShowingSearch(showingSearch, setShowingSearch)}
    >
      <Search />
    </FunctionalIcon>
    {showingSearch && (
      <Input className="search" type="text" placeholder="Search" />
    )}
  </StyledNavButtons>
);

export default NavButtons;
