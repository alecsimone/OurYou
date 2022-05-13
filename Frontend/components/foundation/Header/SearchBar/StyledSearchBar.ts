import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  svg.search {
    margin-right: 1rem;
  }
  input.search {
    font-size: ${(props) => props.theme.bigText};
    opacity: 0.6;
    &:focus {
      opacity: 1;
    }
  }
`;

export default StyledSearchBar;
