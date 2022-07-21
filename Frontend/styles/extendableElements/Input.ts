import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.coolGrey};
  background: none;
  padding: 0.25rem 1rem;
  color: ${(props) => props.theme.white};
  font-family: 'proxima-nova', sans-serif;
  font-size: ${(props) => props.theme.smallText};
  &:disabled {
    background: ${(props) => props.theme.coolGrey};
  }
  &:focus {
    outline: 2px solid ${(props) => props.theme.blue};
    border-radius: 3px;
  }
  &:invalid:not(:focus):not(:placeholder-shown) {
    border: 1px solid ${(props) => props.theme.red};
  }
`;

export default Input;
