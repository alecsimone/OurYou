import styled from 'styled-components';
import { setAlpha } from '../../../styles/functions/modifyColorFunctions';

const StyledBottomBar = styled.nav`
  position: relative;
  display: flex;
  background: ${(props) => props.theme.deepBlack};
  border-top: var(--foundationBorderStyle);
  z-index: 99;
  form.bottomBarInputWrapper {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: calc(100% + 3px); // 3px to allow for the border
    padding: 1.5rem;
    background: ${(props) => props.theme.midBlack};
    input {
      width: 100%;
      background: ${(props) => props.theme.lightBlack};
      font-size: ${(props) => props.theme.bigText};
      padding: 0.5rem 1rem;
    }
  }
  .bottomBarButtonWrapper {
    cursor: pointer;
    flex-grow: 1;
    text-align: center;
    padding: 2rem 0;
    line-height: 0;
    border-right: 2px solid ${(props) => setAlpha(props.theme.coolGrey, 0.2)};
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
