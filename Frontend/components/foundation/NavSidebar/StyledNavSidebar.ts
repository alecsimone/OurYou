import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';
import { scroll } from '@styles/theme';

const StyledNavSidebar = styled.nav`
  position: relative;
  flex: 0 1 auto;
  border-right: var(--foundationBorderStyle);
  background: ${(props) => props.theme.midBlack};
  padding-top: 1rem;
  padding-bottom: calc(${(props) => props.theme.bigText} + 1rem);
  height: 100%;
  max-height: 100%;
  ${scroll};
  a:hover {
    text-decoration: none;
  }
  .contents {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    max-height: 800px;
  }
  .navLine {
    display: flex;
    align-items: center;
    transition: background 0.2s; /* Our backgrounds have a .5s transition on them by default, but we want this one to be faster */
    cursor: pointer;
    padding: 2rem 4rem 2rem 2rem;
    .navIcon {
      padding: 0 2rem;
      text-align: center;
      line-height: 0;
      svg {
        width: ${(props) => props.theme.bigText};
        &.new {
          transform: rotate(45deg);
        }
        &.avatar {
          rect {
            fill: none;
          }
          path,
          circle {
            fill: ${(props) => props.theme.coolGrey};
          }
        }
      }
    }
    .navLabel {
      justify-self: start;
      margin-left: 2rem;
      line-height: 1;
      white-space: nowrap;
      color: ${(props) => props.theme.white};
      font-size: ${(props) => props.theme.bigText};
    }
    /* stylelint-disable */
    /* it doesn't like that there's descending selectors inside this hover */
    &:hover {
      /* stylelint-enable */
      background: ${(props) => setAlpha(props.theme.white, 0.05)};
      .navLabel {
        color: ${(props) => props.theme.blue};
      }
      .navIcon {
        svg {
          &.Home,
          &.Twitter,
          &.Links {
            path {
              fill: ${(props) => props.theme.blue};
            }
          }
          &.you,
          &.Friends,
          &.Collections {
            path,
            circle {
              stroke: ${(props) => props.theme.blue};
            }
          }
          &.Search {
            path {
              fill: ${(props) => props.theme.blue};
            }
            circle {
              stroke: ${(props) => props.theme.blue};
            }
          }
          &.new,
          &.logOut {
            rect {
              fill: ${(props) => props.theme.blue};
            }
          }
          &.avatar {
            path,
            circle {
              fill: ${(props) => props.theme.blue};
            }
          }
        }
      }
    }
  }
  &.collapsed {
    .navLine {
      padding: 2rem 0;
    }
  }
  svg.collapse {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`;

export default StyledNavSidebar;
