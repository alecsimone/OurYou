import styled from 'styled-components';

const StyledBorderlessTextarea = styled.textarea`
  border: none;
  background: none;
  resize: none;
  color: ${(props) => props.theme.white};
  font-family: 'proxima-nova', sans-serif;
  font-size: ${(props) => props.theme.smallText};
`;

export default StyledBorderlessTextarea;
