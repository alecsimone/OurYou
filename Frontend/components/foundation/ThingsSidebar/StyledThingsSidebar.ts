import styled from 'styled-components';

const StyledThingsSidebar = styled.nav`
  background: ${(props) => props.theme.midBlack};
  border-left: var(--foundationBorderStyle);
  height: 100%;
  max-height: 100%;
  ${(props) => props.theme.scroll};
`;

export default StyledThingsSidebar;
