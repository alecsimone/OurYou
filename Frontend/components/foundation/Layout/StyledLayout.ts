import styled from 'styled-components';

const StyledPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  main.mainSection {
    flex-grow: 1;
    overflow: hidden;
    position: relative;
    ${(props) => props.theme.mobileBreakpoint} {
      /* Below the mobile breakpoint, the two sidebars take up the whole screen. Above, they're in a flexbox with the page component */
      display: flex;
    }
    .navSidebar {
      position: absolute;
      top: 0;
      height: 100%;
      left: 0;
      width: 100%;
      transition: transform 0.2s ease-out;
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
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      ${(props) => props.theme.mobileBreakpoint} {
        width: auto;
      }
      &.home {
        ${(props) => props.theme.desktopBreakpoint} {
          position: relative;
        }
      }
      transition: transform 0.2s ease-out;
      &.hidden {
        transform: translateX(100%);
        ${(props) => props.theme.desktopBreakpoint} {
          transform: translateX(0);
          width: auto;
        }
      }
    }
  }
`;

export default StyledPage;
