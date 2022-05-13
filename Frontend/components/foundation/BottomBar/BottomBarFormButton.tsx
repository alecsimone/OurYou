import { ReactNode } from 'react';
import FunctionalIcon from '../../icons/FunctionalIcon';

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
  <div
    className={`bottomBarButtonWrapper ${name}`}
    role="button"
    tabIndex={0}
    onClick={() => dispatch()}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        dispatch();
      }
    }}
  >
    <FunctionalIcon iconName={name}>{icon}</FunctionalIcon>
  </div>
);

export default BottomBarFormButton;
