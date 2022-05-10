import { FC, useContext} from 'react';
import { ThemeContext } from 'styled-components';
import getComputedColor from '../../styles/functions/getComputedColor';
import { ColorNames } from '../../styles/styled';

interface SearchProps {
  color?: ColorNames; // color of the icon, defaults to coolGrey
}

const Search: FC<SearchProps> = ({color = 'coolGrey'}) => {
  const theme = useContext(ThemeContext);
  const computedColor = getComputedColor(theme, color);

  return (
    <>
      <circle
        cx="80.39"
        cy="80.89"
        r="70.39"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit="10"
        strokeWidth="18"
      />
      <path
        d="M116.56,141.54h71a17.32,17.32,0,0,1,17.32,17.32v4.69a17.32,17.32,0,0,1-17.32,17.32h-71a0,0,0,0,1,0,0V141.54a0,0,0,0,1,0,0Z"
        transform="translate(161.06 -66.42) rotate(45)"
        fill={computedColor}
      />
    </>
  );
};

export default Search;
