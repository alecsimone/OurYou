import { ColorNames } from '@styles/styled.d';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface HamburgerProps {
  color?: ColorNames; // color of the icon, defaults to coolGrey
}

const HamburgerIcon = ({ color = 'coolGrey' }: HamburgerProps): JSX.Element => {
  const theme = useContext(ThemeContext);
  const computedColor = theme[color];

  return (
    <>
      <rect
        y="160"
        width="200"
        height="40"
        rx="15"
        fill={computedColor}
      />
      <rect
        y="80"
        width="200"
        height="40"
        rx="15"
        fill={computedColor}
      />
      <rect
        y="0"
        width="200"
        height="40"
        rx="15"
        fill={computedColor}
      />
    </>
  );
};

export default HamburgerIcon;
