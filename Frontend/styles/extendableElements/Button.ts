import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const Button = styled.button`
  padding: 1rem;
  background: none;
  color: ${(props) => props.theme.white};
  &:hover {
    background: ${(props) => setAlpha(props.theme.coolGrey, 0.2)};
  }
  border: 1px solid ${(props) => props.theme.coolGrey};
  border-radius: 3px;
  cursor: pointer;
  font-size: ${(props) => props.theme.smallText};
`;

export default Button;
