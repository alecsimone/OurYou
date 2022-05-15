import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const StyledLogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  a.logoLink {
    line-height: 0;
    svg.logo {
      width: ${(props) => props.theme.smallHead};
      height: ${(props) => props.theme.smallHead};
      margin-top: -2px; // We don't want it quite centered. I think it looks best with the hole in the logo lining up with the O in ouryou, which requires a slight nudge to off-center
    }
  }
  a.siteName,
  a.siteName:visited {
    display: none;
    ${(props) => props.theme.mobileBreakpoint} {
      display: block;
    }
    font-size: ${(props) => props.theme.bigText};
    font-weight: 300;
    margin-left: 1rem;
    line-height: 1;
    color: ${(props) => setAlpha(props.theme.gold, 0.9)};
    :hover {
      text-decoration: none;
    }
  }
`;

export default StyledLogoBox;
