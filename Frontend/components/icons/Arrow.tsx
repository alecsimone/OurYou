import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ColorNames } from '@styles/styled.d';

interface ArrowProps {
  color?: ColorNames; // color of the icon, defaults to coolGrey
}

const ArrowIcon = ({ color = 'coolGrey' }: ArrowProps): JSX.Element => {
  const theme = useContext(ThemeContext);
  let computedColor: string;
  if (theme[color]) {
    computedColor = theme[color];
  } else {
    computedColor = color;
  }

  return (
    <>
      <rect
        x="45.11"
        y="35.05"
        width="33.33"
        height="141.41"
        transform="translate(-56.68 74.66) rotate(-45)"
        fill={computedColor}
      />
      <rect
        x="68"
        y="89.14"
        width="140.9"
        height="33.21"
        transform="translate(-34.22 128.87) rotate(-45)"
        fill={computedColor}
      />
    </>
  );
};

export default ArrowIcon;
