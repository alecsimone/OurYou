import { setAlpha } from '@styles/functions/modifyColorFunctions';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => setAlpha(props.theme.deepBlack, 0.75)};
  display: flex;
  align-items: center;
  justify-content: center;
  .modalMolder {
    position: relative;
    background: ${(props) => props.theme.deepBlack};
    padding: 3rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => setAlpha(props.theme.coolGrey, 0.25)};
    min-width: 60%;
    max-width: 100%;
    min-height: 60%;
    max-height: 100%;
    ${(props) => props.theme.scroll};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg.closeModal {
    opacity: 0.25;
    &:hover {
      opacity: 0.5;
    }
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: ${(props) => props.theme.smallText};
  }
`;

export default StyledModal;
