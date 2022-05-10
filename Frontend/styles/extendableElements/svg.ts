import styled from 'styled-components';

const SVG = styled.svg`
  width: ${(props) => props.theme.bigText};
  /* I'm not going to declare a height value here, because it isn't really necessary, and if I do then I have to set both height and width any time I want to change it
  height: ${(props) => props.theme.bigText}; */
  cursor: pointer;
`;

export default SVG;
