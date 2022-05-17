import styled from 'styled-components';
import { scroll } from '@styles/theme';

const StyledThingsSidebar = styled.nav`
  transform: translateX(0%);
  border-left: var(--foundationBorderStyle);
  background: ${/* sc-value */ (props) => props.theme.midBlack};
  height: 100%;
  max-height: 100%;
  ${scroll};
`;
export default StyledThingsSidebar;
