import styled from 'styled-components';

const StyledProfileSidebar = styled.div`
  border-left: var(--foundationBorderStyle);
  background: ${/* sc-value */ (props) => props.theme.midBlack};
  padding: 2rem;
  > * {
    margin: 1rem 0;
  }
  .editableAvatar {
    width: 100%;
    .avatar {
      display: block;
      width: 30rem;
      height: 30rem;
    }
    button.changeAvatar {
      display: block;
      margin: auto;
      border: none;
      &:hover {
        background: none;
        text-decoration: underline;
      }
    }
  }
`;

export default StyledProfileSidebar;
