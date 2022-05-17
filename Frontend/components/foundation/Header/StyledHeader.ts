import styled from 'styled-components';
import { desktopBPWidth, mobileBPWidth } from '@styles/breakpoints';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: var(--foundationBorderStyle);
  background: ${(props) => props.theme.midBlack};
  padding: 1.5rem 2rem;
  ${(props) => props.theme.mobileBreakpoint} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .headerLeft {
    display: none;
    ${(props) => props.theme.mobileBreakpoint} {
      display: flex;
      align-items: center;
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
