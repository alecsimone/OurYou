import styled from 'styled-components';
import { desktopBPWidth, mobileBPWidth } from '../../../styles/breakpoints';
import { setAlpha, setLightness } from '../../../styles/modifyColorFunctions';

const StyledHeader = styled.header`
  background: ${(props) => props.theme.midBlack};
  border-bottom: var(--foundationBorderStyle);
  padding: 1.5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${(props) => props.theme.mobileBreakpoint} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${(props) => props.theme.midScreenBreakpoint} {
  }
  nav.navButtons {
    display: none;
    ${(props) => props.theme.mobileBreakpoint} {
      display: flex;
    }
  }
  .logoBox {
    justify-content: flex-start;
    ${(props) => props.theme.mobileBreakpoint} {
      justify-content: center;
    }
  }
  &.showingSearch {
    @media (min-width: ${mobileBPWidth}) and (max-width: ${desktopBPWidth}) {
      grid-template-columns: 1fr 1fr;
      .logoBox {
        display: none;
      }
    }
  }
`;

export default StyledHeader;
