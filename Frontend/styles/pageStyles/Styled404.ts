import styled from 'styled-components';

const Styled404 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  h3 {
    font-size: ${(props) => props.theme.smallHead};
    font-weight: bold;
  }
`;

export default Styled404;
