import styled from 'styled-components';

const Styled404 = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: ${(props) => props.theme.smallHead};
    font-weight: bold;
  }
`;

export default Styled404;
