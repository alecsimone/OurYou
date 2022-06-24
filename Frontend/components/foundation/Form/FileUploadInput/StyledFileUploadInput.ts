import styled from 'styled-components';
import { setLightness } from '@styles/functions/modifyColorFunctions';

const StyledFileUploadInput = styled.div`
  .mediaPreview {
    margin-bottom: 1rem;
  }
  label {
    display: inline-block;
    margin: 0 auto 2rem;
    border: 1px solid ${(props) => props.theme.coolGrey};
    border-radius: 3px;
    background: ${(props) => setLightness(props.theme.blue, 25)};
    cursor: pointer;
    padding: 0.5rem 1rem;
    &:hover {
      background: ${(props) => setLightness(props.theme.blue, 35)};
    }
  }
  input {
    display: none;
  }
`;

export default StyledFileUploadInput;
