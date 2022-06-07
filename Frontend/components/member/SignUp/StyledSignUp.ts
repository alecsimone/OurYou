import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const StyledSignUp = styled.div`
  background: ${(props) => props.theme.deepBlack};
  width: 100rem;
  max-width: 90%;
  button.resetPassword,
  button.back {
    display: block;
    margin: auto;
    border: none;
    color: ${(props) => setAlpha(props.theme.gold, 0.6)};
    &:hover {
      background: none;
      text-decoration: underline;
    }
  }
`;

export default StyledSignUp;
