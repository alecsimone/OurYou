import styled from 'styled-components';

const Select = styled.select`
  border: 1px solid ${(props) => props.theme.coolGrey};
  border-radius: 3px;
  background: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  font-family: 'proxima-nova', sans-serif;
  font-size: ${(props) => props.theme.smallText};
  option {
    background: ${(props) => props.theme.midBlack};
    cursor: pointer;
  }
`;

export default Select;
