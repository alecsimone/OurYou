import Link from 'next/link';
import { FC } from 'react';
import FunctionalIcon from '../../../icons/FunctionalIcon';
import LogoIcon from '../../../icons/Logo';
import StyledLogoBox from './StyledLogoBox';

interface LogoBoxProps {}

const LogoBox: FC<LogoBoxProps> = () => {
  console.log('LogoBox');
  return (
    <StyledLogoBox>
      <Link href="/">
        <FunctionalIcon iconName="logo" titleTextReplacement="OurYou">
          <LogoIcon />
        </FunctionalIcon>
      </Link>
    </StyledLogoBox>
  );
};

export default LogoBox;
