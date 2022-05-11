import Link from 'next/link';
import FunctionalIcon from '../../../icons/FunctionalIcon';
import LogoIcon from '../../../icons/Logo';
import { toggleNavSidebarFn } from '../../Layout';
import StyledLogoBox from './StyledLogoBox';

interface LogoBoxProps {
  toggleNavSidebar: toggleNavSidebarFn;
}

const LogoBox = ({ toggleNavSidebar }: LogoBoxProps): JSX.Element => {
  return (
    <StyledLogoBox className="logoBox">
      <Link href="/">
        <a className="logoLink" href="/" aria-label="homepage link">
          <FunctionalIcon
            iconName="logo"
            titleTextReplacement="Ouryou"
            onClick={(e) => toggleNavSidebar(e, 'logo')}
          >
            <LogoIcon />
          </FunctionalIcon>
        </a>
      </Link>
      <Link href="/">
        <a className="siteName" href="/">
          Ouryou
        </a>
      </Link>
    </StyledLogoBox>
  );
};

export default LogoBox;
