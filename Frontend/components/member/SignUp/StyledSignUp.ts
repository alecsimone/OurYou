import styled from 'styled-components';
import Form from '@styles/extendableElements/Form';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const StyledSignUp = styled(Form)`
  background: ${(props) => props.theme.deepBlack};
  width: 100rem;
  max-width: 90%;
  input {
    width: 100%;
    &:valid {
      border: 1px solid ${(props) => setAlpha(props.theme.green, 0.5)};
    }
  }
`;

export default StyledSignUp;
