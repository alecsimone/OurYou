import { ColorNames } from '@styles/styled.d';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface YouProps {
  color?: ColorNames; // color of the icon, defaults to coolGrey
}

const YouIcon = ({ color = 'coolGrey' }: YouProps): JSX.Element => {
  const theme = useContext(ThemeContext);
  const computedColor = theme[color];

  return (
    <>
      <circle
        cx="100"
        cy="58.51"
        r="49"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit={10}
        strokeWidth={18}
      />
      <path
        d="M9.23,200c0-50.68,40.64-91.76,90.77-91.76s90.77,41.08,90.77,91.76"
        fill="none"
        stroke={computedColor}
        strokeMiterlimit={10}
        strokeWidth={18}
      />
    </>
  );
};

export default YouIcon;
