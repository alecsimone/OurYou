import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const StyledBottomBar = styled.nav`
  display: flex;
  position: relative;
  z-index: 99;
  border-top: var(--foundationBorderStyle);
  background: ${(props) => props.theme.deepBlack};
  form.bottomBarInputWrapper {
    position: absolute;
    bottom: calc(100% + 3px); /* 3px to allow for the border */
    left: 0;
    background: ${(props) => props.theme.midBlack};
    padding: 1.5rem;
    width: 100%;
    input {
      background: ${(props) => props.theme.lightBlack};
      padding: 0.5rem 1rem;
      width: 100%;
      font-size: ${(props) => props.theme.bigText};
    }
  }
  .bottomBarButtonWrapper {
    flex-grow: 1;
    border-right: 2px solid ${(props) => setAlpha(props.theme.coolGrey, 0.2)};
    cursor: pointer;
    padding: 2rem 0;
    text-align: center;
    line-height: 0;
    &:last-child {
      border-right: none;
    }
    svg {
      &.new {
        transform: rotate(45deg);
      }
    }
  }
  ${(props) => props.theme.mobileBreakpoint} {
    display: none;
  }
`;

export default StyledBottomBar;
