import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  main.mainSection {
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    ${(props) => props.theme.mobileBreakpoint} {
      /* Below the mobile breakpoint, the two sidebars take up the whole screen. Above, they're in a flexbox with the page component */
      display: flex;
    }
    .navSidebar {
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.2s ease-out;
      width: 100%;
      height: 100%;
      ${(props) => props.theme.mobileBreakpoint} {
        width: auto;
      }
      ${(props) => props.theme.desktopBreakpoint} {
        position: relative;
      }
      &.hidden {
        transform: translateX(-100%);
        ${(props) => props.theme.desktopBreakpoint} {
          transform: translateX(0);
          width: auto;
        }
      }
    }
    .pageComponent {
      flex-grow: 1;
      height: 100%;
    }
    .thingsSidebar {
      position: absolute;
      top: 0;
      right: 0;
      transition: transform 0.2s ease-out;
      width: 100%;
      ${(props) => props.theme.mobileBreakpoint} {
        width: auto;
      }
      &.home {
        ${(props) => props.theme.desktopBreakpoint} {
          position: relative;
        }
      }
      &.hidden {
        transform: translateX(100%);
        ${(props) => props.theme.mobileBreakpoint} {
          &.home {
            width: 0;
          }
        }
      }
    }
  }
`;

export default StyledPage;
