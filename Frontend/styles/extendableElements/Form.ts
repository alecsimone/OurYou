import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const StyledForm = styled.form`
  fieldset {
    margin: 0;
    border: none;
    padding: 0;
  }
  .requirements {
    position: relative;
    max-width: 100%;
    color: ${(props) => setAlpha(props.theme.red, 0.75)};
    font-weight: bold;
  }
  .inputWrapper {
    position: relative;
    margin: 1.5rem 0;
    &:focus-within {
      .requirements {
        display: none;
      }
    }
  }
  input {
    border: 1px solid ${(props) => props.theme.coolGrey};
    padding: 1.5rem;
    width: 100%;
    &:valid:not(:placeholder-shown) {
      border: 1px solid ${(props) => setAlpha(props.theme.green, 0.5)};
    }
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0 0;
    button[type='submit'] {
      display: block;
      transition: opacity 0.2s;
      background: ${(props) => setAlpha(props.theme.blue, 0.8)};
      &[aria-disabled='true'] {
        opacity: 0.5;
        color: ${(props) => props.theme.coolGrey};
      }
    }
    button.cancel {
      background: ${(props) => setAlpha(props.theme.red, 0.25)};
      &:hover {
        background: ${(props) => setAlpha(props.theme.red, 0.4)};
      }
    }
  }
`;

export default StyledForm;
