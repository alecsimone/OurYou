import Link from 'next/link';
import FunctionalIcon from '@icons/FunctionalIcon';
import LogoIcon from '@icons/Logo';
import { mobileBreakpointPx } from '@styles/breakpoints';
import StyledLogoBox from './StyledLogoBox';

interface LogoBoxProps {
  toggleNavSidebar: () => void;
}

const LogoBox = ({ toggleNavSidebar }: LogoBoxProps): JSX.Element => (
  <StyledLogoBox className="logoBox">
    <Link
      href="/"
      passHref
    >
      <a
        className="logoLink"
        href="replace"
        aria-label="homepage link"
      >
        <FunctionalIcon
          iconName="logo"
          titleTextReplacement="Ouryou"
          onTrigger={(e) => {
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
    <Link
      href="/"
      passHref
    >
      <a
        className="siteName"
        href="replace"
      >
        Ouryou
      </a>
    </Link>
  </StyledLogoBox>
);

export default LogoBox;
