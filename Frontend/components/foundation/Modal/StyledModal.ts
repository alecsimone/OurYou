import styled from 'styled-components';
import { setAlpha, setLightness } from '@styles/functions/modifyColorFunctions';

const StyledModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: ${(props) => setAlpha(props.theme.deepBlack, 0.75)};
  width: 100%;
  height: 100%;
  .modalMolder {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => setAlpha(props.theme.coolGrey, 0.25)};
    border-radius: 0.5rem;
    background: ${(props) => props.theme.deepBlack};
    padding: 3rem;
    width: min(90vh, 90vw); /* 90% of whichever side is smaller */
    max-width: 100%;
    height: calc(min(90vh, 90vw) * 0.75); /* Make it a 4:3 aspect ratio */
    max-height: 100%;
    font-size: ${(props) => props.theme.bigText};
    &.error {
      /* border-left: 3px solid ${(props) =>
        setAlpha(props.theme.red, 0.75)}; */
      /* background: ${(props) => setLightness(props.theme.red, 5)}; */
      font-weight: bold;
      .errorBox {
        border: 2px solid ${(props) => setAlpha(props.theme.red, 0.5)};
        background: ${(props) => setAlpha(props.theme.lightBlack, 0.75)};
        padding: 3rem 5rem;
        border-radius: 0.5rem;
      }
      h4 {
        display: block;
        font-size: ${(props) => props.theme.smallHead};
        text-align: center;
        margin: 0 0 2rem 0;
        color: ${(props) => setAlpha(props.theme.red, 0.75)};
      }
    }
  }
  svg.closeModal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    opacity: 0.25;
    width: ${(props) => props.theme.smallText};
    &:hover {
      opacity: 0.5;
    }
  }
`;

export default StyledModal;
