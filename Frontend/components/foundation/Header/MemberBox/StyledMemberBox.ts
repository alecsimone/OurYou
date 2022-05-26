import styled from 'styled-components';

const StyledMemberBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.gold};
  font-weight: 600;
  > * {
    margin-right: 2rem;
    &:last-child {
      margin-right: 0;
    }
  }
  a.profileLink,
  a.profileLink:visited,
  button.prompt {
    color: ${(props) => props.theme.gold};
    font-weight: 600;
  }
  .avatar {
    cursor: pointer; /* The default avatar svg gets this from SVG, but we need it for the img element when there's actually an avatar */
    width: ${(props) => props.theme.smallHead};
  }
  button.prompt {
    border: none;
    &:hover {
      background: none;
      text-decoration: underline;
    }
    &.signUp {
      margin-right: 0;
    }
  }
`;

export default StyledMemberBox;
