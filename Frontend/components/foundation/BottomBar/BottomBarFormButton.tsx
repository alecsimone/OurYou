import { ReactNode } from 'react';
import FunctionalIcon from '@icons/FunctionalIcon';
import Button from '@styles/extendableElements/Button';

interface BottomBarFormButtonProps {
  name: 'search' | 'new';
  icon: ReactNode;
  dispatch: () => void;
}

const BottomBarFormButton = ({
  name,
  icon,
  dispatch,
}: BottomBarFormButtonProps): JSX.Element => (
  <Button
    className={`bottomBarButtonWrapper ${name}`}
    type="button"
    tabIndex={0}
    onClick={() => dispatch()}
  >
    <FunctionalIcon iconName={name}>{icon}</FunctionalIcon>
  </Button>
);

export default BottomBarFormButton;
