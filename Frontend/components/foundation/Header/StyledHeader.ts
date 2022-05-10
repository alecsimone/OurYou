import styled from 'styled-components';
import { setLightness } from '../../../styles/modifyColorFunctions';

const StyledHeader = styled.header`
  background: ${(props) => props.theme.midBlack};
  border-bottom: 3px solid
      ${(props) => setLightness(props.theme.coolGrey, 10)};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default StyledHeader;
