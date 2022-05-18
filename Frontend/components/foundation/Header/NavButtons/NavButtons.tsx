import FunctionalIcon from '@icons/FunctionalIcon';
import HamburgerIcon from '@icons/Hamburger';
import X from '@icons/X';
import StyledNavButtons from './StyledNavButtons';

interface NavButtonsProps {
  toggleNavSidebar: () => void;
}

const NavButtons = ({ toggleNavSidebar }: NavButtonsProps): JSX.Element => (
  <StyledNavButtons className="navButtons">
    <FunctionalIcon
      iconName="hamburger"
      titleTextReplacement="Show Nav Sidebar"
      onTrigger={() => {
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
  </StyledNavButtons>
);

export default NavButtons;
