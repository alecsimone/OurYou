import { useRouter } from 'next/router';
import StyledThingsSidebar from './StyledThingsSidebar';

interface ThingsSidebarProps {
  isOpen: boolean;
}

const ThingsSidebar = ({ isOpen }: ThingsSidebarProps): JSX.Element => {
  const router = useRouter();
  const isHome = router.pathname === '/';

  let className = 'thingsSidebar';
  if (isHome) {
    className += ' home';
  }

  if (isOpen) {
    className += ' visible';
  } else {
    className += ' hidden';
  }

  return (
    <StyledThingsSidebar className={className}>
      ThingsSidebar
    </StyledThingsSidebar>
  );
};

export default ThingsSidebar;
