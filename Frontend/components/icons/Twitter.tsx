import { ColorNames } from '@styles/styled.d';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface TwitterProps {
  color?: ColorNames; // color of the icon, defaults to blue
}

const TwitterIcon = ({ color = 'blue' }: TwitterProps): JSX.Element => {
  const theme = useContext(ThemeContext);
  const computedColor = theme[color];

  return (
    <path
      d="M200,38.51c-7.46,3.3-15.38,5.47-23.48,6.44,8.54-5.11,14.93-13.16,17.98-22.63-8.02,4.78-16.81,8.14-25.97,9.95-15.47-16.47-41.37-17.28-57.84-1.81-8.23,7.73-12.9,18.52-12.9,29.81,0,3.13,.35,6.25,1.05,9.3-32.89-1.65-63.53-17.2-84.29-42.76-10.85,18.69-5.3,42.59,12.66,54.6-6.5-.2-12.85-1.96-18.53-5.12v.53c0,19.46,13.7,36.23,32.77,40.1-6.03,1.62-12.34,1.85-18.47,.7,5.35,16.66,20.71,28.08,38.2,28.39-14.49,11.37-32.38,17.54-50.79,17.51-3.26,0-6.53-.19-9.77-.57,18.69,12.02,40.46,18.4,62.68,18.38,75.23,0,116.36-62.31,116.36-116.35,0-1.76-.04-3.53-.12-5.29,8-5.78,14.91-12.94,20.39-21.15l.06-.02Z"
      fill={computedColor}
    />
  );
};

export default TwitterIcon;
