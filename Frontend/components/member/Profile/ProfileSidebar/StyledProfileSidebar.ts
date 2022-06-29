import styled from 'styled-components';
import { scroll } from '@styles/theme';

const StyledProfileSidebar = styled.div`
  ${scroll}
  border-left: var(--foundationBorderStyle);
  background: ${/* sc-value */ (props) => props.theme.midBlack};
  padding: 2rem;
  > * {
    margin: 1rem 0;
  }
  .profileLine {
    display: flex;
    align-items: center;
    .profileLabel {
      margin-right: 0.5rem;
    }
  }
`;

export default StyledProfileSidebar;
