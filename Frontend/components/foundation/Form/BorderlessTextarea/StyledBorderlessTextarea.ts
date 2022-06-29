import styled from 'styled-components';

interface Props {
  underline?: boolean;
}

const StyledBorderlessTextarea = styled.textarea<Props>`
  margin-bottom: ${(props) => (props.underline ? '-1px' : '0')};
  border: none;
  border-bottom: ${(props) =>
    props.underline ? `1px dashed ${props.theme.coolGrey}` : 'none'};
  background: none;
  overflow: hidden;
  resize: none;
  color: ${(props) => props.theme.white};
  font-family: 'proxima-nova', sans-serif;
  font-size: ${(props) => props.theme.smallText};
`;

export default StyledBorderlessTextarea;
