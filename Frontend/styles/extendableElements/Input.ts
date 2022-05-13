import styled from 'styled-components';

const Input = styled.input`
  background: none;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.smallText};
  font-family: 'proxima-nova', sans-serif;
  border-radius: 3px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.coolGrey};
  padding: 0.25rem 1rem;
  &:disabled {
    background: ${(props) => props.theme.coolGrey};
  }
  &:focus {
    border-radius: 3px;
  }
`;

export default Input;
