import styled from 'styled-components';
import { setLightness } from '../../../styles/modifyColorFunctions';

const StyledHeader = styled.header`
  background: ${(props) => props.theme.midBlack};
  border-bottom: 3px solid
      ${(props) => setLightness(props.theme.coolGrey, 10)};
  padding: 1.5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default StyledHeader;
