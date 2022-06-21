import styled from 'styled-components';
import { setAlpha } from '@styles/functions/modifyColorFunctions';

const StyledMediaUploadPreview = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => setAlpha(props.theme.coolGrey, 0.5)};
  border-radius: 3px;
  background: ${(props) => setAlpha(props.theme.coolGrey, 0.25)};
  .thumb {
    width: 10rem;
    height: 100%;
    line-height: 0;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
  .mediaMeta {
    flex-grow: 1;
    padding: 0 1rem;
    text-align: center;
    word-break: break-all;
    font-size: ${(props) => props.theme.miniText};
    .fileSize {
      opacity: 0.65;
      font-size: ${(props) => props.theme.tinyText};
    }
  }
  svg.removeMedia {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    opacity: 0.6;
    width: ${(props) => props.theme.miniText};
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default StyledMediaUploadPreview;
