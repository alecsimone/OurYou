import styled from 'styled-components';
import { setAlpha } from '../../../../styles/modifyColorFunctions';

const StyledLogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  a.logoLink {
    line-height: 0;
    svg.logo {
      width: ${(props) => props.theme.smallHead};
      height: ${(props) => props.theme.smallHead};
    }
  }
  a.siteName, a.siteName:visited {
    display: none;
    ${(props) => props.theme.mobileBreakpoint} {
      display: block;
    }
    font-size: ${(props) => props.theme.bigText};
    font-weight: 300;
    margin-left: 1rem;
    color: ${(props) => setAlpha(props.theme.gold, 0.9)};
    :hover {
      text-decoration: none;
    }
  }
`;

export default StyledLogoBox;
