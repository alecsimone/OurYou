import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const StyledForm = styled.form`
  fieldset {
    margin: 0;
    border: none;
    padding: 0;
  }
  .inputWrapper {
    position: relative;
    &:focus-within {
      .requirements {
        display: none;
      }
    }
  }
  .requirements {
    /* display: none; */
    position: absolute;
    top: 0;
    color: ${(props) => setAlpha(props.theme.red, 0.75)};
    font-weight: bold;
  }
  input {
    margin: 1.5rem 0;
    border: 1px solid ${(props) => props.theme.coolGrey};
    padding: 1.5rem;
    width: 100%;
    &:valid {
      border: 1px solid ${(props) => setAlpha(props.theme.green, 0.5)};
    }
    &:invalid:not(:placeholder-shown):not(:focus) {
      margin-top: calc(1.5rem + ${(props) => props.theme.smallText});
      /* & ~ .requirements {
        display: block;
      } */
    }
  }
  button[type='submit'] {
    display: block;
    transition: opacity 0.2s;
    margin: 2rem auto 0;
    background: ${(props) => setAlpha(props.theme.blue, 0.8)};
    &[aria-disabled='true'] {
      opacity: 0.5;
      background: ${(props) => setAlpha(props.theme.blue, 0.25)};
      color: ${(props) => props.theme.coolGrey};
    }
  }
`;

export default StyledForm;
