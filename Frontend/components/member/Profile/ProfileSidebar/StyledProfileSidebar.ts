import styled from 'styled-components';
import { scroll } from '@styles/theme';

const StyledProfileSidebar = styled.div`
  ${scroll}
  border-left: var(--foundationBorderStyle);
  background: ${/* sc-value */ (props) => props.theme.midBlack};
  padding: 2rem;
  max-width: min(35%, 35vh);
  > * {
    margin: 1rem 0;
  }
  .profileLine {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
    .profileLabel {
      margin-right: 0.5rem;
    }
    .profileValue {
      flex: 1;
      width: 6ch;
      min-width: 6ch;
      input {
        display: block;
        min-width: 6ch;
        max-width: 100%;
      }
    }
  }
`;

export default StyledProfileSidebar;
