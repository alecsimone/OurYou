import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const StyledEditableAvatar = styled.div`
  --max-editableAvatar-width: min(35rem, 35vw);
  width: 100%;
  max-width: 100%;
  text-align: center;
  .avatar {
    display: block;
    margin-bottom: 2rem;
    width: var(--max-editableAvatar-width);
    height: var(--max-editableAvatar-width);
  }
  button.changeAvatar {
    display: block;
    margin: 2rem auto;
  }
  .editAvatarWrapper {
    border: 1px solid ${(props) => setAlpha(props.theme.coolGrey, 0.6)};
    border-radius: 3px;
    background: ${(props) => setAlpha(props.theme.coolGrey, 0.2)};
    padding: 2rem 1rem;
    max-width: var(--max-editableAvatar-width);
    .errorBox {
      margin-bottom: 2rem;
      padding: 2rem;
      max-width: var(--max-editableAvatar-width);
      h4 {
        display: inline-block;
        margin: 0;
      }
    }
    .mediaPreview {
      margin-bottom: 2rem;
      max-width: var(--max-editableAvatar-width);
    }
    .linkToAvatar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        text-align: center;
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-around;
      button {
        display: block;
        margin: auto;
        &[type='submit'] {
          background: ${(props) => setAlpha(props.theme.green, 0.25)};
          &:hover {
            background: ${(props) => setAlpha(props.theme.green, 0.4)};
          }
        }
      }
    }
    .uploadAvatar {
      text-align: center;
    }
  }
`;

export default StyledEditableAvatar;
