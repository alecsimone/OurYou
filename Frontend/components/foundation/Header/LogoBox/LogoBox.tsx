import Link from "next/link";
import { FC } from "react";
import FunctionalIcon from "../../../icons/FunctionalIcon";
import LogoIcon from "../../../icons/Logo";
import StyledLogoBox from "./StyledLogoBox";

interface LogoBoxProps {}

const LogoBox: FC<LogoBoxProps> = () => {
  return (
    <StyledLogoBox className="logoBox">
      <Link href="/">
        <a className="logoLink" href="/" aria-label="homepage link">
          <FunctionalIcon iconName="logo" titleTextReplacement="Ouryou">
            <LogoIcon />
          </FunctionalIcon>
        </a>
      </Link>
      <Link href="/">
        <a className="siteName" href="/" aria-label="homepage link">
          Ouryou
        </a>
      </Link>
    </StyledLogoBox>
  );
};

export default LogoBox;
