import styled from 'styled-components';
import { setAlpha } from '../../../styles/functions/modifyColorFunctions';

const StyledNavSidebar = styled.nav`
  position: relative;
  background: ${(props) => props.theme.midBlack};
  flex: 0 1 auto;
  border-right: var(--foundationBorderStyle);
  a:hover {
    text-decoration: none;
  }
  height: 100%;
  max-height: 100%;
  ${(props) => props.theme.scroll};
  padding-top: 1rem;
  padding-bottom: calc(${(props) => props.theme.bigText} + 1rem);
  &.collapsed {
    .navLine {
      padding: 2rem 0;
    }
  }
  .contents {
    height: 100%;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .navLine {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 2rem 4rem 2rem 2rem;
    transition: background 0.2s; // Our backgrounds have a .5s transition on them by default, but we want this one to be faster
    &:hover {
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
    .navIcon {
      text-align: center;
      padding: 0 2rem;
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
      color: ${(props) => props.theme.white};
      font-size: ${(props) => props.theme.bigText};
      margin-left: 2rem;
      line-height: 1;
      white-space: nowrap;
    }
  }
  svg.collapse {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

export default StyledNavSidebar;
