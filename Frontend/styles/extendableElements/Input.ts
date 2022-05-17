import styled from 'styled-components';

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.coolGrey};
  border-radius: 3px;
  background: none;
  padding: 0.25rem 1rem;
  color: ${(props) => props.theme.white};
  font-family: 'proxima-nova', sans-serif;
  font-size: ${(props) => props.theme.smallText};
  &:disabled {
    background: ${(props) => props.theme.coolGrey};
  }
  &:focus {
    border-radius: 3px;
  }
`;

export default Input;
