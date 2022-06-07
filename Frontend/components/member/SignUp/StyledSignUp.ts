import styled from 'styled-components';

const StyledSignUp = styled.div`
  background: ${(props) => props.theme.deepBlack};
  width: 100rem;
  max-width: 90%;
  button.resetPassword {
    display: block;
    margin: auto;
    border: none;
    &:hover {
      background: none;
      text-decoration: underline;
    }
  }
  button.back {
    border: none;
    &:hover {
      background: none;
      text-decoration: underline;
    }
  }
`;

export default StyledSignUp;
