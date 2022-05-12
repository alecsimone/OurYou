import FunctionalIcon from '@icons/FunctionalIcon';
import LogoIcon from '@icons/Logo';
import { mobileBreakpointPx } from '@styles/breakpoints';
import Link from 'next/link';
import StyledLogoBox from './StyledLogoBox';

interface LogoBoxProps {
  toggleNavSidebar: () => void;
}

const LogoBox = ({ toggleNavSidebar }: LogoBoxProps): JSX.Element => (
  <StyledLogoBox className="logoBox">
    <Link href="/">
      <a
        className="logoLink"
        href="/"
        aria-label="homepage link"
      >
        <FunctionalIcon
          iconName="logo"
          titleTextReplacement="Ouryou"
          onClick={(e) => {
            if (window.innerWidth <= mobileBreakpointPx) {
              e.preventDefault();
              toggleNavSidebar();
            }
          }}
        >
          <LogoIcon />
        </FunctionalIcon>
      </a>
    </Link>
    <Link href="/">
      <a
        className="siteName"
        href="/"
      >
        Ouryou
      </a>
    </Link>
  </StyledLogoBox>
);

export default LogoBox;
