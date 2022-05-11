import Input from '../../../../styles/extendableElements/Input';
import FunctionalIcon from '../../../icons/FunctionalIcon';
import HamburgerIcon from '../../../icons/Hamburger';
import Search from '../../../icons/Search';
import X from '../../../icons/X';
import StyledNavButtons from './StyledNavButtons';

interface NavButtonsProps {
  showingSearch: boolean;
  toggleShowingSearch: () => void;
  toggleNavSidebar: () => void;
}

const NavButtons = ({
  showingSearch,
  toggleShowingSearch,
  toggleNavSidebar,
}: NavButtonsProps): JSX.Element => (
  <StyledNavButtons className="navButtons">
    <FunctionalIcon
      iconName="hamburger"
      titleTextReplacement="Show Nav Sidebar"
      onClick={() => {
        toggleNavSidebar();
      }}
    >
      <HamburgerIcon />
    </FunctionalIcon>
    <FunctionalIcon
      iconName="newPost"
      titleTextReplacement="New Post"
    >
      <X color="coolGrey" />
    </FunctionalIcon>
    <FunctionalIcon
      iconName="search"
      onClick={() => toggleShowingSearch()}
    >
      <Search />
    </FunctionalIcon>
    {showingSearch && (
      <Input
        className="search"
        type="text"
        placeholder="Search"
      />
    )}
  </StyledNavButtons>
);

export default NavButtons;
