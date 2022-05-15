import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import getComputedColor from '@styles/functions/getComputedColor';

interface XProps {
  color?: string; // color of the icon, defaults to red
}

const X = ({ color = 'red' }: XProps): JSX.Element => {
  const theme = useContext(ThemeContext);
  const computedColor = getComputedColor(theme, color);

  return (
    <>
      <rect
        x="73.73"
        y="-15.06"
        width="52"
        height="230.58"
        transform="translate(-41.66 99.87) rotate(-45)"
        fill={computedColor}
      />
      <rect
        x="73.73"
        y="-15.06"
        width="52"
        height="230.58"
        transform="translate(99.37 241.62) rotate(-135)"
        fill={computedColor}
      />
    </>
  );
};

export default X;
