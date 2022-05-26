import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const StyledError = styled.div`
  border: 2px solid ${(props) => setAlpha(props.theme.red, 0.5)};
  border-radius: 0.5rem;
  background: ${(props) => setAlpha(props.theme.lightBlack, 0.75)};
  padding: 3rem 5rem;
  font-weight: bold;
  h4 {
    display: block;
    margin: 0 0 2rem 0;
    text-align: center;
    color: ${(props) => setAlpha(props.theme.red, 0.75)};
    font-size: ${(props) => props.theme.smallHead};
  }
`;

export default StyledError;
