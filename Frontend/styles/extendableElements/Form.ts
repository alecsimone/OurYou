import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const Form = styled.form`
  fieldset {
    border: none;
  }
  .inputWrapper {
    position: relative;
  }
  .requirements {
    display: none;
    position: absolute;
    top: 0;
    color: ${(props) => setAlpha(props.theme.red, 0.75)};
    font-weight: bold;
  }
  input {
    margin: 1.5rem 0;
    border: 1px solid ${(props) => props.theme.coolGrey};
    padding: 1.5rem;
    &:invalid:not(:placeholder-shown):not(:focus) {
      margin-top: calc(1.5rem + ${(props) => props.theme.smallText});
      & ~ .requirements {
        display: block;
      }
    }
  }
  button[type='submit'] {
    display: block;
    margin: 2rem auto 0;
  }
`;

export default Form;
