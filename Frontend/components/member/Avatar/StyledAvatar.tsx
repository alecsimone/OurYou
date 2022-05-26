import styled from 'styled-components';

const StyledAvatar = styled.img`
  border-radius: 100%;
`;

export default StyledAvatar;

const StyledDefaultAvatar = styled.div`
  display: inline-block;
  line-height: 0;
  svg.defaultAvatar {
    border-radius: 100%;
  }
`;

export { StyledDefaultAvatar };
