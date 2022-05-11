import styled from 'styled-components';
import { setAlpha } from '../../../styles/modifyColorFunctions';

const StyledNavSidebar = styled.nav`
  background: ${(props) => props.theme.midBlack};
  flex: 0 1 auto;
  border-right: var(--foundationBorderStyle);
  a:hover {
    text-decoration: none;
  }
  max-height: 100%;
  ${(props) => props.theme.scroll};
  .navLine {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 2rem 4rem 2rem 1rem;
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
      width: 8rem;
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
`;

export default StyledNavSidebar;
