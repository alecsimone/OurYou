import styled from 'styled-components';

const StyledNavButtons = styled.nav`
  display: flex;
  align-items: center;
  svg.newPost {
    margin-right: 2rem;
    rotate: 45deg;
    padding: 0.1rem; /* Because the X rotated has height sqroot(2 * 2.25^2) (pythagorean theorem, bitches), we need to shrink it a little bit to stay in line with the other icons */
  }
  svg.hamburger {
    margin-right: 2rem;
    ${(props) => props.theme.desktopBreakpoint} {
      display: none;
    }
  }
`;

export default StyledNavButtons;
