import { FC } from 'react';
import Input from '../../../../styles/extendableElements/Input';
import FunctionalIcon from '../../../icons/FunctionalIcon';
import Search from '../../../icons/Search';
import X from '../../../icons/X';
import StyledNavButtons from './StyledNavButtons';

interface NavButtonsProps {}

const NavButtons: FC<NavButtonsProps> = () => {
  console.log('NavButtons');
  return (
    <StyledNavButtons>
      <FunctionalIcon iconName='newPost'>
        <X color='coolGrey'/>
      </FunctionalIcon>
      <FunctionalIcon iconName='search'>
        <Search />
      </FunctionalIcon>
      <Input
          className="search"
          type="text"
          placeholder="Search"
      />
    </StyledNavButtons>
  );
};

export default NavButtons;
