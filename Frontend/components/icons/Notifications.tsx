import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ColorNames } from '../../styles/styled';

interface NotificationsIconProps {
  color?: ColorNames; // color of the icon, defaults to coolGrey
}

const NotificationsIcon: FC<NotificationsIconProps> = ({color = 'coolGrey'}) => {
  const theme = useContext(ThemeContext);
  const computedColor = theme[color];

  return (
    <>
      <circle
            cx="101"
            cy="23"
            r="13"
            fill="none"
            stroke={computedColor}
            strokeMiterlimit="10"
            strokeWidth="18"
         />
         <path
            d="M101,37c22.22.22,37.45,20.83,39,23,20.93,29.21,2.13,61.63,26,85,5.71,5.59,10.38,7.25,10,11-1.15,11.31-45.65,16-75,16-27.82,0-72.63-4.24-74-16-.44-3.76,3.86-5.75,9-11,23.86-24.35,4.61-56.25,25-85C62,58.66,77.94,36.78,101,37Z"
            fill="none"
            stroke={computedColor}
            strokeMiterlimit="10"
            strokeWidth="18"
         />
         <ellipse
            cx="101"
            cy="181.6"
            rx="16.5"
            ry="9"
            fill="none"
            stroke={computedColor}
            strokeMiterlimit="10"
            strokeWidth="18"
         />
    </>
  );
};

export default NotificationsIcon;