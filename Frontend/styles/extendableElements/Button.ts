import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.coolGrey};
  border-radius: 3px;
  background: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.white};
  font-family: 'proxima-nova', sans-serif;
  font-size: ${(props) => props.theme.smallText};
  &:hover {
    background: ${(props) => setAlpha(props.theme.coolGrey, 0.2)};
  }
`;

export default Button;
